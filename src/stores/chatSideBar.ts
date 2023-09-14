import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import useChatInstanceStore from "./chatInstance";

export interface State { sidebarMobile: boolean | null; sidebarDesktop: boolean }
export interface Navs { id: number; content: string; }
export interface SidebarNavs { time: string; navs: Navs[] }

const chatInstance = useChatInstanceStore()

export const useChatSideBarStore = defineStore("chatSideBar", () => {
    // sidebar show hide state
    const state = reactive<State>({
        sidebarMobile: null,
        sidebarDesktop: true
    })

    function showSideBarMobile() {
        state.sidebarMobile = true
    }
    function hideSideBarMobile() {
        state.sidebarMobile = false
    }
    function showSideBarDesktop() {
        state.sidebarDesktop = true;
    }
    function hideSideBarDesktop() {
        state.sidebarDesktop = false;
    }

    // sidebar Navs
    const sidebarNavs = ref<SidebarNavs[]>([
        {
            time: "today",
            navs: [
                { id: 1, content: "Chat message 1" },
                { id: 2, content: "Chat message 2" },
                { id: 5, content: "Chat message 5" },
            ],
        },
        {
            time: "yesterday",
            navs: [
                { id: 9, content: "Chat message 9" },
                { id: 10, content: "Chat message 10" },
            ],
        },
        {
            time: "previousDays",
            navs: [
                { id: 13, content: "Chat message 13" },
            ],
        }
    ])
    // chat message list
    const chatList = ref<any>([
        {
            "id": 1,
            "chats": [
                {
                    "robot": "Spelling correction - It depends on your project. How much would you like to give after qualified your slider.",
                    "user": "depends on your project. How much would you like to give after qualifying your slider?"
                },
                {
                    "robot": "Spelling correction Let's build this application. I hope I will get my expected amount. Don't worry about this. I will charge less than your budget.",
                    "user": "Let's build this application. I hope I will get my expected amount. Don't worry about this. I will charge less than your budget."
                },
                {
                    "robot": "Spelling correction By the way, is Fiverr made by your country's developer?",
                    "user": "By the way, was Fiverr made by developers from your country?"
                }
            ]
        },
        {
            "id": 2,
            "chats": []
        },
        {
            "id": 5,
            "chats": [
                {
                    "robot": "Spelling correction - It depends on your proj",
                    "user": "depends on your project. How mualifying your slider?"
                },
                {
                    "robot": "Spelling correction Let's build thisnt. Don't worry about this. I will charge less than your budget.",
                    "user": "Let's build this application. I hope I will get my expected amount. Don't worry about this. I will charge less than your budget."
                },
                {
                    "robot": "Spelling correction By the way, is Fiverr made by your country's developer?",
                    "user": "By the way, was Fiverr made by developers from your country?"
                }
            ]
        },
        {
            "id": 9,
            "chats": [
                {
                    "robot": "Spelling correction - It depends on your project. How much would you like to give after qualified your slider.",
                    "user": "depends on your project. How much would you like to give after qualifying your slider?"
                },
                {
                    "robot": "Spelling correction Let's build this application. I hope I will get my expected amount. Don't worry about this. I will charge less than your budget.",
                    "user": "Let's build this application. I hope I will get my expected amount. Don't worry about this. I will charge less than your budget."
                },
                {
                    "robot": "Spelling correction By the way, is Fiverr made by your country's developer?",
                    "user": "By the way, was Fiverr made by developers from your country?"
                }
            ]
        },
        {
            "id": 10,
            "chats": [
                {
                    "robot": "Spelling correction - It depends on your project. How much would you like to give after qualified your slider.",
                    "user": "depends on your project. How much would you like to give after qualifying your slider?"
                },
                {
                    "robot": "Spelling correction Let's build this application. I hope I will get my expected amount. Don't worry about this. I will charge less than your budget.",
                    "user": "Let's build this application. I hope I will get my expected amount. Don't worry about this. I will charge less than your budget."
                },
                {
                    "robot": "Spelling correction By the way, is Fiverr made by your country's developer?",
                    "user": "By the way, was Fiverr made by developers from your country?"
                }
            ]
        },
        {
            "id": 13,
            "chats": [
                {
                    "robot": "Spelling correction -",
                    "user": "depends on your project."
                },
                {
                    "robot": "Spelling correction.",
                    "user": "Let's build this application."
                },
                {
                    "robot": "Spelling correction By the way, is Fiverr made by your country's developer?",
                    "user": "By the way, was Fiverr made by developers from your country?"
                }
            ]
        },
    ])
    const activeNavIndex = ref<number | undefined>()
    const currentChatList = ref<any>({})

    function addMaxId() {
        let max = 0;
        sidebarNavs.value.forEach((obj: SidebarNavs) => {
            obj.navs.forEach((nav: Navs) => {
                max = nav.id > max ? nav.id : max;
            })
        })
        return max + 1;
    }
    function addNewInstance() {
        sidebarNavs.value = sidebarNavs.value.map((obj: SidebarNavs) => {
            // add new instance only for `time: "today"`
            if (obj.time === 'today') {
                return {
                    time: obj.time,
                    navs: [
                        ...obj.navs,
                        { id: addMaxId(), content: "Chat Message" + addMaxId() }
                    ]
                }
            } else {
                return obj;
            }
        })


        // add new chats to chatList
        chatList.value = [...chatList.value, { id: addMaxId(), chats: [] }]
    }
    function editMessage(id: number, content: string) {
        sidebarNavs.value = sidebarNavs.value.map((obj: SidebarNavs) => ({
            time: obj.time,
            navs: obj.navs.map((nav: Navs) => {
                if (nav.id === id) nav.content = content;
                return nav
            })
        }))
    }
    function deleteMessage(id: number) {
        sidebarNavs.value = sidebarNavs.value.map((obj: SidebarNavs) => ({
            time: obj.time,
            navs: obj.navs.filter((nav: Navs) => nav.id !== id)
        }))
        chatList.value = chatList.value.filter((obj: any) => obj.id !== id)

        console.log(JSON.parse(JSON.stringify(chatList.value)));
    }
    // it will forward message, not related to nav text
    function forwardMessage(id: number) {
        // let message = sidebarNavs.find((msg: any) => msg.id === id);
        // if (message) {
        //     sidebarNavs.messages.push({ id: Date.now(), content: message.content });
        // }
    }
    // set `setActiveIndex` onclick nav item
    function setActiveIndex(current: number) {
        activeNavIndex.value = current;

        // sync chatList to another store `chatInstanceStore`
        chatList.value.forEach((obj: any) => {
            if (obj.id === current) {
                // chat list from `sideBarStore`
                let chats = obj.chats;

                if (chats) {
                    // set initial chatList to `chatInstanceStore`
                    chatInstance.addInitial(chats)
                }
            }
        })

    }

    return {
        state, showSideBarMobile, hideSideBarMobile, showSideBarDesktop, hideSideBarDesktop,
        sidebarNavs, addNewInstance, editMessage, deleteMessage, forwardMessage,
        chatList,
        activeNavIndex, setActiveIndex,
        currentChatList,
    }
});