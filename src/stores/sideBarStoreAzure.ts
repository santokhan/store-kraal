import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { State } from "./chatSideBarTypes";
import { SideBarData, TypeChatMessage } from "../kraal-api/types.azureAPI";
import azureAPI from "../kraal-api/azureAPI";
import { dummyChats, dummyConversation } from "./dummy";

export const useSideBarStoreAzureStore = defineStore("chatSideBarAzure", () => {
    const state = reactive<State>({ sidebarMobile: null, sidebarDesktop: true })
    const sideBarList = ref<SideBarData[]>([])
    // const sideBarList = ref<SideBarData[]>(dummyChats)
    const recentChatId = ref<number>(0)
    const chatMessages = ref<TypeChatMessage[]>([])
    // const chatMessages = ref<TypeChatMessage[]>(dummyConversation)
    const animateChatBox = ref<boolean>(false)
    const customInstructions = ref<boolean>(false)

    return {
        state,
        getSidebarMobile: () => state.sidebarMobile,
        showSideBarMobile() { state.sidebarMobile = true },
        hideSideBarMobile() { state.sidebarMobile = false },
        getSidebar: () => state.sidebarDesktop,
        showSideBarDesktop() { state.sidebarDesktop = true },
        hideSideBarDesktop() { state.sidebarDesktop = false },
        toggleSideBarDesktop() { state.sidebarDesktop = !state.sidebarDesktop },
        animateChatBox,
        handleAnimateChatBox() {
            animateChatBox.value = true

            // clear outline after 3000ms
            setTimeout(() => {
                animateChatBox.value = false
            }, 3000);
        },

        // #sidebar
        sideBarList,
        recentChatId,
        async addNewInstance() {
            const res = await azureAPI.chat.createChat("New chat");
            // call it after getting response
            // await this.assignSideBarData();
            return res;
        },
        async assignSideBarData() {
            const navList = await azureAPI.chat.getChats();
            if (navList.length > 0) {
                // descending
                sideBarList.value = navList.sort((a: SideBarData, b: SideBarData) => {
                    if (a.id < b.id) {
                        return 1
                    } else if (a.id > b.id) {
                        return -1
                    } else {
                        return 0
                    }
                });
            }
        },
        async editChatName(id: number, name: string) {
            await azureAPI.chat.editChat(id, name)
            this.assignSideBarData()
        },
        /**
         * 1. Delete chat instance from server
         * 2. Re-assign sidebar data on delete
         * 3. Set `recentChatId` to 0. Because on delete it will redirect to /kraalai. The /kraalai should not have valid `recentChatId`
         * @param id 
         */
        async deleteSideBarInstance(id: number) {
            await azureAPI.chat.deleteChat(id)
            this.assignSideBarData()
            recentChatId.value = 0
        },

        // #coversation
        chatMessages,
        /**
         * 1. Create new chat instance on form submit
         * 
         * 2. Create new chat messsage
         * 
         * @param message 
         * @returns 
         */
        create_chat() {
            return this.addNewInstance()
        },
        async assignChatMessage(chatId: number) {
            const conversations = await azureAPI.chat.getChatMessages(chatId);
            const len = conversations.length
            if (len < 1) { throw new Error() };
            chatMessages.value = conversations
        },
        async Re_assignChatMessage(chatId: number) {
            const conversations = await azureAPI.chat.getChatMessages(chatId);
            const len = conversations.length
            if (len < 1) { throw new Error() };

            conversations[len - 1].typewriter = true
            chatMessages.value = conversations
        },
        async clearChatMessages() {
            chatMessages.value = []
        },
        async sendNewChatMessage(message: string, files?: File[]) {
            if (message) {
                const res = await azureAPI.chat.sendNewChatMessage(message)
                console.log(res)
                if (res) {
                    if (files) {
                        const result = await azureAPI.chat.sendDocuments(res.chatId, files);
                        console.log(result);
                    }
                    // *** set `recentChatId` to switch welcome to coversation ***
                    recentChatId.value = res.chatId;
                    /**
                     * 1. assign messages to print
                     * 2. assign sidebar nav
                     */
                    await this.Re_assignChatMessage(res.chatId)
                    await this.assignSideBarData();
                }
            } else {
                console.log(`Can not read 'message'`);
            }
        },
        async sendChatMessage(id: number, message: string) {
            if (!id && !message) {
                console.log(`Can not read 'id' and 'message'`);
                return;
            }
            await azureAPI.chat.sendChatMessage(id, message)
            // set `recentChatId` to switch welcome to coversation
            recentChatId.value = id

            // assign messages to print
            await this.Re_assignChatMessage(id)
            await this.assignSideBarData();
        },
        clearRecentChatId() {
            recentChatId.value = 0
        },
        clear_chatId_and_messages() {
            recentChatId.value = 0
            chatMessages.value = []
        },
        customInstructions,
        handleCustomInstructions() {
            customInstructions.value = true;
        }
    }
})

