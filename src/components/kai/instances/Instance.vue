<template>
    <!-- !Do not use parent div in this instance -->
    <div ref="chatMain" class="h-full overflow-y-auto text-white">
        <div v-if="!store.getActiveNavIndex()" class="max-w-4xl mx-auto px-4 pt-24 flex justify-center">
            <Models />
        </div>

        <div class="relative text-gray-200">
            <div v-for="(chat, index) in chatList()" :key="index">
                <div class="border-b border-gray-800">
                    <div class="flex gap-4 max-w-4xl mx-auto px-4 py-7">
                        <User class="w-6 min-w-[1.5rem] text-gray-400" />{{ chat.user }}
                    </div>
                </div>
                <div class="bg-chatgpt-400 border-b border-gray-800">
                    <div class="max-w-4xl mx-auto px-4 py-7 flex gap-4 items-start w-full">
                        <!-- <RobotStatic v-if="chat.stopTypeWriter" :robot="chat.robot" /> -->
                        <RobotWriter v-if="chat.stopTypeWriter" :robot="chat.robot" :eleScrollTop="eleScrollTop" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ChatFooter />
    <GoToDashboard title="Go to dashboard link" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useChatSideBarStore } from "../../../stores/chatSideBar";
import ChatFooter from "../chat-footer/ChatFooter.vue";
import Models from "./chat-main/models/Models.vue";
import User from '../../icons/user-pro.vue';
import RobotWriter from "../typewriter/robot-writer/RobotWriter.vue";
import GoToDashboard from "../chat-footer/GoToDashboard.vue";
import RobotStatic from "../typewriter/robot-writer/RobotStatic.vue";

const store = useChatSideBarStore()

const chatMain: any = ref(null);
// Will be called on typewriter
function eleScrollTop() {
    const ele = chatMain.value;
    const rect = ele.getBoundingClientRect();
    ele.scrollTop += rect.height;
}

// The `chatList` will render directly from Pinia Store. No variable, no state
function chatList() {
    const chats = store.getActiveChatList()[0].chats
    return chats || []
}
</script>
