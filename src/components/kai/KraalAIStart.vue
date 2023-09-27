<template>
    <div class="fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50 flex">
        <ChatSidebar />
        <div class="flex flex-col w-full h-full">
            <WelcomeChat v-if="recentChatId === 0" />
            <WelcomeInstance v-else />
            <QuestionIcon />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue"
import WelcomeInstance from "./instances/WelcomeInstance.vue"
import ChatSidebar from "./sidebar/ChatSidebar.vue"
import WelcomeChat from "./instances/chat-main/WelcomeChat.vue"
import QuestionIcon from './instances/QuestionIcon.vue'
import { useSideBarStoreAzureStore, useWelcomeChatStore } from "../../stores/sideBarStoreAzure"
import { storeToRefs } from "pinia"

const store = useSideBarStoreAzureStore()
const chatStore = useWelcomeChatStore()
store.assignSideBarData()
const { recentChatId, chatMessages } = storeToRefs(chatStore)

onMounted(() => {
    // Set `background: bg-chatgpt-500` on /Kai page for Apple phones
    document.body.style.background = "rgb(52 53 65)"
})
onUnmounted(() => { document.body.style.background = "" })


</script>

<style scoped></style>
