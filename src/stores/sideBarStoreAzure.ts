import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { State } from "./chatSideBarTypes";
import { getCurrentUser } from "vuefire";
import { SideBarData, TypeChatMessage } from "../kraal-api/types.azureAPI";
import azureAPI from "../kraal-api/azureAPI";

export const useSideBarStoreAzureStore = defineStore("chatSideBarAzure", () => {
    const state = reactive<State>({ sidebarMobile: null, sidebarDesktop: true })
    // Set previous chatList from `getAPIResponse`
    const sideBarList = ref<SideBarData[]>([])
    const chatMessages = ref<TypeChatMessage[]>([])
    const recentChatId = ref<number>(0)
    const uid = ref<string>("")
    const cUser = getCurrentUser()
    cUser.then(user => { if (user) { uid.value = user.uid } })

    return {
        state,
        sideBarList,
        recentChatId,
        chatMessages,
        max(): number { return sideBarList.value.reduce((acc: number, curr: SideBarData) => acc > curr.id ? acc : curr.id, 0) },
        min(): number { return sideBarList.value.reduce((acc: number, curr: SideBarData) => acc < curr.id ? acc : curr.id, this.max()) },
        getSidebarMobile: () => state.sidebarMobile,
        showSideBarMobile() { state.sidebarMobile = true },
        hideSideBarMobile() { state.sidebarMobile = false },
        getSidebar: () => state.sidebarDesktop,
        showSideBarDesktop() { state.sidebarDesktop = true },
        hideSideBarDesktop() { state.sidebarDesktop = false },
        toggleSideBarDesktop() { state.sidebarDesktop = !state.sidebarDesktop },

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
        async deleteSideBarInstance(id: number) {
            await azureAPI.chat.deleteChat(id)
            this.assignSideBarData()
            // recentChatId.value = 0
        },
        /**
         * 1. Create new chat instance on form submit
         * 
         * 2. Create new chat messsage
         * 
         * @param message 
         * @returns 
         */
        async create_chat_and_send_message(message: string) {
            const chat = await this.addNewInstance()
            await azureAPI.chat.sendChatMessage(chat.id, message);
            recentChatId.value = chat.id
        },
        async assignChatMessage(chatId: number) {
            chatMessages.value = await azureAPI.chat.getChatMessages(chatId);
        },
        async clearChatMessages() {
            chatMessages.value = []
        },
        async sendChatMessage(id: number, message: string) {
            await azureAPI.chat.sendChatMessage(id, message)
        }
    }
})
