<template>
    <!-- !Do not use parent div in this instance -->
    <div ref="chatMain" class="h-full overflow-y-auto text-white">
        <div class="relative text-gray-200">
            <div v-for="message in shownChatMessages" ref="messages">
                <div v-if="message.author === authors[0]" class="border-b border-gray-800">
                    <div class="flex gap-4 max-w-4xl mx-auto px-4 py-7 text-sm tracking-wider font-light text-white">
                        <div v-if="userStoreRef.currentUser"
                            class="w-[1.95rem] min-w-[1.95rem] h-[1.95rem] text-gray-200 border grid place-items-center rounded-full">
                            {{ userStoreRef.currentUser.value?.initials }}
                        </div>
                        {{ message.message }}
                    </div>
                </div>
                <div v-if="message.author === authors[1]" class="bg-chatgpt-400 border-b border-gray-800">
                    <div class="max-w-4xl mx-auto px-4 py-7 flex gap-4 items-start w-full font-light">
                        <Kraalai class="w-[1.95rem] min-w-[1.95rem] text-gray-400" />
                        <RobotStatic :robot="message.message" />
                    </div>
                </div>
            </div>
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
    newShownMessages.forEach(m => {m.message = replaceURLs(m.message)});
    shownChatMessages.value = newShownMessages;
    console.log("Reloaded messages");
}

async function sendMessage(message: string, files?: File[]) {
    if (!message) {
        throw new Error("Can not read message input");
    } else {
        if (files && files.length >= 1) {
            await azureAPI.chat.sendDocuments(chatId, files);
        }

        sideBarStoreAzure.sendChatMessage(chatId, message);
        isInputLocked.value = true;
        const shownMessage = new ShownChatMessage("", message, "User", chatStore.chats.get(chatId)!);
        shownChatMessages.value.push(shownMessage);
        setTimeout(() => scrollToLastMessage(), 100);
    }
}

function replaceURLs(content: string) {
    const uuidRegex = /(\[.+\])\(.*\/?([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\)/gi; // Regex pattern for (...)[.../UUID]

    return content.replace(uuidRegex, (match, text, uuid) => {
        return `${text}(https://kraalapi20230810134811.azurewebsites.net/api/documents/no/${uuid})`;
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
        await azureAPI.chat.connectHub();
    }
    await azureAPI.chat.joinHubChat(chat.uuid);
    isInputLocked.value = props.lockInput ?? false;

    setTimeout(() => scrollToLastMessage(), 100);

    chatHubConnection?.off("ReceiveMessageStart");
    chatHubConnection?.on("ReceiveMessageStart", async (messageJson: { chatUUID: string, uuid: string }) => {
        if (chat.uuid != messageJson.chatUUID) {
            console.log(`?Message start ${chat.uuid} - ${messageJson.chatUUID}`);
            return;
        }
        console.log(`!Message start ${chat.uuid} - ${messageJson.chatUUID}`);
        isInputLocked.value = true;
        // const message = StreamChatMessage.fromJSON({...messageJson, chat: chat});
        // const shownMessage = new ShownChatMessage(message.uuid, message.content, "Bot", message.chat);
        // shownChatMessages.value.push(shownMessage);
        setTimeout(() => scrollToLastMessage(), 100);
    });

    chatHubConnection?.off("ReceiveMessageEnd");
    chatHubConnection?.on("ReceiveMessageEnd", async (messageJson: { chatUUID: string, uuid: string }) => {
        if (chat.uuid != messageJson.chatUUID) {
            console.log(`?Message end ${chat.uuid} - ${messageJson.chatUUID}`);
            return;
        }
        console.log(`!Message end ${chat.uuid} - ${messageJson.chatUUID}`);
        isInputLocked.value = false;
        reloadChatMessages().then(() => {
            setTimeout(() => scrollToLastMessage(), 100);
        });
    });

    chatHubConnection?.off("ReceiveMessageUpdate");
    chatHubConnection?.on("ReceiveMessageUpdate", (messageJson: { chatUUID: string, uuid: string, content: string }) => {
        if (chat.uuid != messageJson.chatUUID) {
            console.log(`?Message update ${chat.uuid} - ${messageJson.chatUUID}`);
            return;
        }
        console.log(`!Message update ${chat.uuid} - ${messageJson.chatUUID} - ${messageJson.content}`);
        const message = StreamChatMessage.fromJSON({ ...messageJson, chat: chat });
        const shownMessage = shownChatMessages.value.at(-1);
        if (!shownMessage || shownMessage!.uuid != message.uuid) {
            const content = replaceURLs(message.content);
            const newShownMessage = new ShownChatMessage(message.uuid, content, "Bot", message.chat);
            shownChatMessages.value.push(newShownMessage);
        }
        shownChatMessages.value.at(-1)!.message = message.content;
        setTimeout(() => scrollToLastMessage(), 100);
    });
});
</script>
