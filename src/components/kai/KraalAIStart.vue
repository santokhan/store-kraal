<template>
    <div class="fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50 flex">
        <ChatSidebar />
        <div class="flex flex-col w-full h-full">
            <ChatInstance v-if="!welcomeChatIsOpen" :chatId="recentChatId" />
            <WelcomeChat v-else :hideWelcomeChat="hideWelcomeChat" />
            <QuestionIcon />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue"
import ChatInstance from "./instances/Instance.vue"
import ChatSidebar from "./sidebar/ChatSidebar.vue"
import WelcomeChat from "./instances/chat-main/WelcomeChat.vue"
import { useSideBarStoreAzureStore } from '../../stores/sideBarStoreAzure'
import QuestionIcon from './instances/QuestionIcon.vue'
import { storeToRefs } from "pinia"

const store = useSideBarStoreAzureStore()
store.assignSideBarData()

const { recentChatId } = storeToRefs(store)

onMounted(() => {
    // Set `background: bg-chatgpt-500` on /Kai page for Apple phones
    document.body.style.background = "rgb(52 53 65)"
})
onUnmounted(() => { document.body.style.background = "" })

const welcomeChatIsOpen = ref(true)
function hideWelcomeChat() {
    welcomeChatIsOpen.value = false
}
</script>

<style scoped></style>
