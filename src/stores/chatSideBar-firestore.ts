import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { ChatList, State } from "./chatSideBarTypes";
import { APIURL } from "./APIURL";
import { getCurrentUser } from "vuefire";
import KraalAIStore from '../firebase/kraalai'

export const useChatSideBarStore = defineStore("chatSideBar", () => {
    const state = reactive<State>({ sidebarMobile: null, sidebarDesktop: true })
    // Set previous chatList from `getAPIResponse`
    const chatList = ref<ChatList[]>([])
    const activeNavIndex = ref<number>(0)
    const uid = ref<string>("")
    const cUser = getCurrentUser()
    cUser.then(user => { if (user) { uid.value = user.uid } })
    const logger = (str: string) => {
        // console.log(`KAI Store: ${str}`)
    }

    return {
        state,
        activeNavIndex,
        max(): number { return chatList.value.reduce((acc: number, curr: ChatList) => acc > curr.id ? acc : curr.id, 0) },
        min(): number { return chatList.value.reduce((acc: number, curr: ChatList) => acc < curr.id ? acc : curr.id, this.max()) },
        getSidebarMobile: () => state.sidebarMobile,
        showSideBarMobile() { state.sidebarMobile = true },
        hideSideBarMobile() { state.sidebarMobile = false },
        getSidebar: () => state.sidebarDesktop,
        showSideBarDesktop() { state.sidebarDesktop = true },
        hideSideBarDesktop() { state.sidebarDesktop = false },
        // Info: Chat related functions
        addNewInstance() {
            // Todo: When new instance will be created `activeNavIndex` will be shifted to the new instance
            const max = this.max() + 1;
            const newChat: ChatList = {
                _id: "",
                chats: [],
                id: max,
                nav: `Chat message ${max}`,
                uid: uid.value
            }
            // addDoc to firestore
            KraalAIStore.addDoc(newChat, () => {
                chatList.value = [...chatList.value, newChat]
                activeNavIndex.value = max; // switch to new insFance

                this.reAssignDocs()
            })
        },
        /**
         * Re-assign on adding new chat instance
         * 
         * Do not re-assign on chat update
         * 
         * Re-assign on chat instance delete
         */
        reAssignDocs() {
            KraalAIStore.getDoc(uid.value, (docs) => {
                if (docs.length > 0) {
                    chatList.value = JSON.parse(JSON.stringify(docs))
                    logger('Kai: Docs are re-assigned');
                } else {
                    logger(`Kai: Docs are empty.`);
                }
            })
        },
        /**
         * Call once
         * 
         * Assign Firestore docs to Pinia chatList initialy on page mounted
         * 
         * Go to Kai component to call `props.assignDocsOnMounted()`
         */
        assignDocsOnMounted() {
            KraalAIStore.getDoc(uid.value, (docs) => {
                if (docs.length > 0) {
                    chatList.value = JSON.parse(JSON.stringify(docs))

                    // Set first Nav item as `activeNavIndex`
                    activeNavIndex.value = this.min()

                    logger('Kai: Docs are assigned to Pinia');
                } else {
                    logger(`Kai: Docs are empty.`);
                }
            })
        },
        /**
         * Will be trigged on submit
         * 
         * Will store User question & ChatGPT answer response on Pinia Store & Firestore
         * 
         * @param input User question to ChatGPT
         */
        updateChatList(input: string) {
            input = input.trim()

            async function api_request() {
                if (input) {
                    // Assign form input to `user: input` before assigning response
                    chatList.value = chatList.value.map((e: ChatList) => {
                        if (e.id === activeNavIndex.value) {
                            e.chats.push({
                                user: input,
                                robot: "",
                                // set typewriter true before update Firestore docs
                            })
                            logger(`Kai: Chat id ${e.id} was updated.`);
                        }
                        return e;
                    })

                    // Update Firestore when get response back from ChatGPT API
                    await fetch(APIURL, {
                        body: JSON.stringify({ question: input }),
                        headers: { "Content-Type": "application/json" },
                        method: "POST",
                    }).then(data => data.json()).then((res) => {
                        if (res.data.markdownData) {
                            function updateChatList() {
                                chatList.value = chatList.value.map((ele: ChatList) => {
                                    if (ele.id === activeNavIndex.value) {
                                        ele.chats = ele.chats.map(item => {
                                            if (item.user === input) {
                                                item.robot = res.data.markdownData
                                                item.stopTypeWriter = false
                                            }
                                            return item
                                        })
                                    }
                                    return ele
                                })
                            }
                            updateChatList()

                            function updateFireStore() {
                                chatList.value.forEach((ele: ChatList) => {
                                    if (ele.id === activeNavIndex.value) {
                                        // Calling inside of loop because of activNavIndex
                                        if (ele._id) {
                                            KraalAIStore.updateDocChats(ele._id, ele.chats.map(e => {
                                                // Set `e.stopTypeWriter = true` to stop typewriter effect
                                                e.stopTypeWriter = true;
                                                return e
                                            }))
                                        } else { logger(`Can not read undefined of 'ele._id'`) }
                                    }
                                })
                            }
                            updateFireStore()
                        } else {
                            logger(`Can not read ${res.data.markdownData}`);
                        }
                    }).catch(err => { logger(`Chat response error. ${err}`) })
                } else { logger(`Kai: Can not get form input`); }
            }
            api_request()
        },
        editMessage(id: number, content: string, docID: string) {
            const editNav = () => {
                chatList.value = chatList.value.map((obj: ChatList) => {
                    if (obj.id === id) { obj.nav = content }
                    return obj;
                })
            }
            editNav()

            // update firestore doc nav
            KraalAIStore.updateDocNav(docID, content)
        },
        deleteMessage(id: number, uid: string) {
            const deleting = () => {
                // visit `DeleteChat.md` to read details
                // delete instance by id
                chatList.value = chatList.value.filter((obj: any) => obj.id !== id)

                if (id > this.min()) {
                    let findSmaller = this.min()
                    // [1, 2, 3, 6, 8, 9]
                    // 1 < e.id < 8
                    // output 6
                    chatList.value.forEach(e => {
                        if (findSmaller < e.id && e.id < id) {
                            findSmaller = e.id
                        }
                    })
                    activeNavIndex.value = findSmaller
                } else {
                    // remove 3 from [3, 4, 5]
                    // id < min
                    // output min
                    activeNavIndex.value = this.min()
                }
            }
            // deleting()

            // Delete document from firestore
            KraalAIStore.deleteDoc(uid, deleting)

            this.reAssignDocs()
        },
        forwardMessage(id: number) {
        },
        setActiveIndex(current: number) {
            if (typeof current === 'number') {
                activeNavIndex.value = current;
                logger(`Kai: Switch activeNavIndex to ${current}`);
            } else {
                logger(`Kai: Require value number but get string`);
            }
        },
        getActiveNavIndex(): number { return activeNavIndex.value },
        getFullChatList(): ChatList[] { return chatList.value },
        getActiveChatList(): ChatList[] { return chatList.value.filter(e => e.id === activeNavIndex.value) }
    }
})
