<template>
    <div class="fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50 flex">
        <ChatSidebar />
        <div class="flex flex-col w-full h-full">
            <ChatHeaderForMobile title="Mobile screen navbar" />
            <ChatInstance v-if="chatSideBar.getActiveNavIndex()" />
            <WelcomeChat v-else />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import ChatHeaderForMobile from "./chat-header/ChatHeader.vue";
import ChatInstance from "./instances/Instance.vue";
import ChatSidebar from "./sidebar/ChatSidebar.vue";
import { useChatSideBarStore } from "../../stores/chatSideBar";
import WelcomeChat from "./instances/chat-main/WelcomeChat.vue";

const chatSideBar = useChatSideBarStore()

onMounted(() => {
    // Assign Firestore docs to Pinia chatList when DOM was Mounted
    setTimeout(() => { chatSideBar.assignDocsOnMounted() }, 100);
    // Set `background: bg-chatgpt-500` on /Kai page for Apple phones
    document.body.style.background = "rgb(52 53 65)"
})
</script>

<style scoped></style>
