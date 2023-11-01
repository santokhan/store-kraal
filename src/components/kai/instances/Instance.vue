<template>
    <!-- !Do not use parent div in this instance -->
    <div ref="chatMain" class="h-full overflow-y-auto text-white">
        <div class="relative text-gray-200">
            <div v-for="message in shownChatMessages" ref="messages">
                <div v-if="message.author === chat_user[0]" class="border-b border-gray-800">
                    <div class="flex gap-4 max-w-4xl mx-auto px-4 py-7 text-sm tracking-wider font-light text-white">
                        <div v-if="userStoreRef.currentUser" class="w-[1.95rem] min-w-[1.95rem] h-[1.95rem] text-gray-200 border grid place-items-center rounded-full">
                            {{ userStoreRef.currentUser.value?.initials }}
                        </div>
                        {{ message.message }}
                    </div>
                </div>
                <div v-if="message.author === chat_user[1]" class="bg-chatgpt-400 border-b border-gray-800">
                    <div class="max-w-4xl mx-auto px-4 py-7 flex gap-4 items-start w-full font-light">
                        <Kraalai class="w-[1.95rem] min-w-[1.95rem] text-gray-400" />
                        <RobotStatic :robot="message.message" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ChatFooter :chatId="props.chatId" @on-input-sent="onInputSent" @on-message-received="onMessageReceived"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ChatFooter from "../chat-footer/ChatFooter.vue";
import UserIcon from '../../icons/user-pro.vue';
import RobotWriter from "../typewriter/robot-writer/RobotWriter.vue";
import { useSideBarStoreAzureStore } from "../../../stores/sideBarStoreAzure";
import { storeToRefs } from "pinia";
import RobotStatic from "../typewriter/robot-writer/RobotStatic.vue";
import Kraalai from "../../icons/kraalai.vue";
import { businessUserInfo } from "../../../firebase/read.business.user";
import { generate_icon } from "../sidebar/sidebar-data";
import { useUserStore } from "../../../stores/userStore";
import { useChatStore } from "../../../stores/chatStore";
import { ShownChatMessage } from "../../../models/chatmessage";
import azureAPI, { chatHubConnection } from "../../../kraal-api/azureAPI";
import { StreamChatMessage } from "../../../models/streamchatmessage";
import RightSidebar from "../sidebar/right/RightSidebar.vue";

const props = defineProps<{ chatId: any }>()
const chatId = parseInt(props.chatId);

const userStore = useUserStore();
const userStoreRef = storeToRefs(userStore);
const chatStore = useChatStore();
const shownChatMessages = ref([] as ShownChatMessage[]);
const chat_user = ["User", "Bot"]

const messages = ref([] as HTMLElement[]);
function scrollToLastMessage() {
    const lastMessage = messages.value.at(-1);
    lastMessage?.scrollIntoView({behavior: "smooth", block: "end"});
}

async function reloadChatMessages() {
    await chatStore.loadChatMessages(chatId);

    const chatMessages = Array.from(chatStore.chats.get(chatId)!.messages.values()).sort((a, b) => b.timestamp.valueOf() - a.timestamp.valueOf());
    shownChatMessages.value = chatMessages.map(m => m.toShownChatMessage());
}

function onInputSent(message: string) {
    const shownMessage = new ShownChatMessage("", message, "User", chatStore.chats.get(chatId)!);
    shownChatMessages.value.push(shownMessage);
    setTimeout(() => scrollToLastMessage(), 100);
}

async function onMessageReceived() {
    await reloadChatMessages();
}
onMounted(async function () {
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
        await azureAPI.chat.joinHubChat(chat.uuid);
    }

    chatHubConnection?.on("ReceiveMessage", (messageJson: {chatUUID: string, uuid: string, content: string}) => {
        if (chat.uuid != messageJson.chatUUID) {
            return;
        }
        const message = StreamChatMessage.fromJSON({...messageJson, chat: chat});
        const shownMessage = new ShownChatMessage(message.uuid, message.content, "Bot", message.chat);
        shownChatMessages.value.push(shownMessage);
        setTimeout(() => scrollToLastMessage(), 100);
    });

    chatHubConnection?.on("ReceiveMessageUpdate", (messageJson: {chatUUID: string, uuid: string, content: string}) => {
        if (chat.uuid != messageJson.chatUUID || shownChatMessages.value.length == 0) {
            return;
        }
        const message = StreamChatMessage.fromJSON({...messageJson, chat: chat});
        const shownMessage = shownChatMessages.value.at(-1);
        if (shownMessage!.uuid != message.uuid) {
            return;
        }
        shownChatMessages.value.at(-1)!.message = message.content;
        setTimeout(() => scrollToLastMessage(), 100);
    });

    scrollToLastMessage();
});
</script>
