import { defineStore } from "pinia";
import { Chat } from "../models/chat";
import azureAPI from "../kraal-api/azureAPI";
import { ChatMessage } from "../models/chatmessage";

export const useChatStore = defineStore("chatStore", {
    state: () => ({
        chats: new Map<number, Chat>(),
    }),
    actions: {
        async loadChats(loadMessages = false) {
            const chatJsonData = await azureAPI.chat.getChats();
            for (const json of chatJsonData) {
                const chat = Chat.fromJSON(json);
                this.chats.set(chat.id, chat);
            }

            if (!loadMessages) {
                return;
            }
            for (const chat of this.chats.values()) {
                this.loadChatMessages(chat.id);
            }
        },
        async loadChatMessages(chatId: number) {
            const chat = this.chats.get(chatId);
            if (!chat) {
                return false;
            }
            const messageJsonData = await azureAPI.chat.getChatMessages(chat.id);
            for (const json of messageJsonData) {
                json.chat = chat;
                const message = ChatMessage.fromJSON(json);
                chat.messages.set(message.id, message);
            }
            return true;
        }
    },
});