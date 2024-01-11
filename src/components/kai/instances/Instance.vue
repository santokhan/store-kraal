<template>
    <!-- !Do not use parent div in this instance -->
    <div ref="chatMain" class="h-full overflow-y-auto relative text-gray-200 conversation">
        <div v-for="message in shownChatMessages" ref="messages">
            <ChatBox v-if="message.author === authors[0]">
                <IconByInitialName v-if="userStoreRef.currentUser.value" :name="userStoreRef.currentUser.value.initials" />
                <div class="w-full lg:w-[calc(100%-115px)] mt-1">
                    <b>{{ userStoreRef.currentUser.value?.fullName }}</b>
                    <br/>
                    {{ message.message }}
                </div>
            </ChatBox>
            <ChatBox v-if="message.author === authors[1]">
                <Kraalai />
                <RobotStatic :robot="message.message" />
            </ChatBox>
        </div>
    </div>
    <ChatFooter :loading="isInputLocked" @on-send="sendMessage" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ChatFooter from "../chat-footer/ChatFooter.vue";
import { storeToRefs } from "pinia";
import RobotStatic from "../typewriter/robot-writer/RobotStatic.vue";
import Kraalai from "../../icons/kraalai.vue";
import { useUserStore } from "../../../stores/userStore";
import { useChatStore } from "../../../stores/chatStore";
import { ShownChatMessage } from "../../../models/chatmessage";
import azureAPI, { chatHubConnection } from "../../../kraal-api/azureAPI";
import { StreamChatMessage } from "../../../models/streamchatmessage";
import { useSideBarStoreAzureStore } from "../../../stores/sideBarStoreAzure";
import IconByInitialName from "./chat-main/users/IconByInitialName.vue";
import ChatBox from "./chat-main/users/ChatBox.vue";
import { VITE_API_URL } from "../../../config";

const defaultBotMessage = '"Blinking dot"';

const props = defineProps<{ chatId: any, lockInput?: boolean }>();
const chatId = parseInt(props.chatId);

const sideBarStoreAzure = useSideBarStoreAzureStore();
const userStore = useUserStore();
const userStoreRef = storeToRefs(userStore);
const chatStore = useChatStore();
const shownChatMessages = ref([] as ShownChatMessage[]);
const authors = ["User", "Bot"];

const isInputLocked = ref(true);

const messages = ref([] as HTMLElement[]);
function scrollToLastMessage() {
    const lastMessage = messages.value.at(-1);
    lastMessage?.scrollIntoView({ behavior: "smooth", block: "end" });
}

async function reloadChatMessages() {
    console.log("Reloading messages");
    await chatStore.loadChatMessages(chatId);

    const chatMessages = Array.from(chatStore.chats.get(chatId)!.messages.values()).sort((a, b) => b.timestamp.valueOf() - a.timestamp.valueOf());
    const newShownMessages = chatMessages.map(m => m.toShownChatMessage())
    newShownMessages.forEach(m => { m.message = replaceURLs(m.message) });
    shownChatMessages.value = newShownMessages;
    console.log("Reloaded messages");
}

async function sendMessage(message: string, files?: File[]) {
    if (!message) {
        throw new Error("Can not read message input");
    } else {
        if (files && files.length >= 1) {
            await azureAPI.chats.sendDocuments(chatId, files);
        }

        sideBarStoreAzure.sendChatMessage(chatId, message);
        isInputLocked.value = true;
        const userShownMessage = new ShownChatMessage("", message, "User", chatStore.chats.get(chatId)!);
        const botShownMessage = new ShownChatMessage("", defaultBotMessage, "Bot", chatStore.chats.get(chatId)!);
        shownChatMessages.value.push(userShownMessage);
        shownChatMessages.value.push(botShownMessage);
        setTimeout(() => scrollToLastMessage(), 100);
    }
}

function replaceURLs(content: string) {
    const uuidRegex = /(\[.+\])\(.*\/?([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\)/gi; // Regex pattern for (...)[.../UUID]

    return content.replace(uuidRegex, (match, text, uuid) => {
        return `${text}(${VITE_API_URL}/documents/no/${uuid})`;
    });
}

onMounted(async function () {
    console.log("Instance mounted");
    if (!userStore.currentUser) {
        await userStore.loadUser();
    }
    if (!chatStore.chats.has(chatId)) {
        await chatStore.loadChats();
    }
    const chat = chatStore.chats.get(chatId)!;
    await reloadChatMessages();

    if (!chatHubConnection) {
        await azureAPI.chats.connectHub();
    }
    await azureAPI.chats.joinHubChat(chat.uuid);
    isInputLocked.value = props.lockInput ?? false;

    setTimeout(() => scrollToLastMessage(), 100);

    chatHubConnection?.off("ReceiveMessageStart");
    chatHubConnection?.on("ReceiveMessageStart", async (messageJson: { chatUUID: string, uuid: string }) => {
        if (chat.uuid != messageJson.chatUUID) {
            return;
        }
        isInputLocked.value = true;
        // const message = StreamChatMessage.fromJSON({...messageJson, chat: chat});
        // const shownMessage = new ShownChatMessage(message.uuid, message.content, "Bot", message.chat);
        // shownChatMessages.value.push(shownMessage);
        setTimeout(() => scrollToLastMessage(), 100);
    });

    chatHubConnection?.off("ReceiveMessageEnd");
    chatHubConnection?.on("ReceiveMessageEnd", async (messageJson: { chatUUID: string, uuid: string }) => {
        if (chat.uuid != messageJson.chatUUID) {
            return;
        }
        isInputLocked.value = false;
        reloadChatMessages().then(() => {
            setTimeout(() => scrollToLastMessage(), 100);
        });
    });

    chatHubConnection?.off("ReceiveMessageUpdate");
    chatHubConnection?.on("ReceiveMessageUpdate", (messageJson: { chatUUID: string, uuid: string, content: string }) => {
        if (chat.uuid != messageJson.chatUUID) {
            return;
        }
        const message = StreamChatMessage.fromJSON({ ...messageJson, chat: chat });
        const shownMessage = shownChatMessages.value.at(-1);
        if (!shownMessage || (shownMessage!.uuid != "" && shownMessage!.uuid != message.uuid)) {
            const content = replaceURLs(message.content);
            const newShownMessage = new ShownChatMessage(message.uuid, content, "Bot", message.chat);
            shownChatMessages.value.push(newShownMessage);
        }
        shownChatMessages.value.at(-1)!.message = message.content;
        setTimeout(() => scrollToLastMessage(), 100);
    });
});
</script>

<style scoped>
.conversation::-webkit-scrollbar {
    background: transparent;
}
</style>