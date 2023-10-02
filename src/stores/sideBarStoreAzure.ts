import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { State } from "./chatSideBarTypes";
import { SideBarData, TypeChatMessage } from "../kraal-api/types.azureAPI";
import azureAPI from "../kraal-api/azureAPI";

export const useSideBarStoreAzureStore = defineStore("chatSideBarAzure", () => {
    const state = reactive<State>({ sidebarMobile: null, sidebarDesktop: true })
    // Set previous chatList from `getAPIResponse`
    const sideBarList = ref<SideBarData[]>([])
    const recentChatId = ref<number>(0)
    const chatMessages = ref<TypeChatMessage[]>([])

    return {
        state,
        getSidebarMobile: () => state.sidebarMobile,
        showSideBarMobile() { state.sidebarMobile = true },
        hideSideBarMobile() { state.sidebarMobile = false },
        getSidebar: () => state.sidebarDesktop,
        showSideBarDesktop() { state.sidebarDesktop = true },
        hideSideBarDesktop() { state.sidebarDesktop = false },
        toggleSideBarDesktop() { state.sidebarDesktop = !state.sidebarDesktop },

        // sidebar
        sideBarList,
        recentChatId,
        async addNewInstance() {
            const res = await azureAPI.chat.createChat("New chat")
            await this.assignSideBarData()
            return res;
        },
        async assignSideBarData() {
            sideBarList.value = await azureAPI.chat.getChats()
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

        // coversation
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
        async sendChatMessage(id: number, message: string) {
            if (!id && !message) {
                console.log(`Can not read 'id' and 'message'`);
                return;
            }
            await azureAPI.chat.sendChatMessage(id, message)
            // set `recentChatId` to switch welcome to coversation
            recentChatId.value = id

            // assign messages to print
            this.Re_assignChatMessage(id)
        },
        clearRecentChatId() {
            recentChatId.value = 0
        },
        clear_chatId_and_messages() {
            recentChatId.value = 0
            chatMessages.value = []
        }
    }
})

