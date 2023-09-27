<template>
    <div class="fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50 flex">
        <ChatSidebar />
        <div class="flex flex-col w-full h-full">
            <ChatInstance :chatId="id" />
            <QuestionIcon />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue"
import ChatInstance from "./instances/Instance.vue"
import ChatSidebar from "./sidebar/ChatSidebar.vue"
import { useSideBarStoreAzureStore } from '../../stores/sideBarStoreAzure'
import QuestionIcon from './instances/QuestionIcon.vue'
import { useRoute } from "vue-router"

const store = useSideBarStoreAzureStore()
store.assignSideBarData()
const route = useRoute()
const paramsId = route.params.id
const id: number = typeof paramsId === 'string' ? parseInt(paramsId) : parseInt(paramsId[0])

onMounted(() => {
    store.assignChatMessage(id);
    // Set `background: bg-chatgpt-500` on /Kai page for Apple phones
    document.body.style.background = "rgb(52 53 65)"
})
onUnmounted(() => { document.body.style.background = "" })
</script>

<style scoped></style>
