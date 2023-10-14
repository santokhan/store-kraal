<template>
    <button type="button" @click="handleNewChat" :class="[
        'w-full h-[3rem] max-h-[3rem] overflow-hidden p-2 my-2 flex items-center gap-2',
        'text-white text-sm border border-gray-600 rounded-md',
        'hover:bg-chatgpt-700'
    ]">
        <Plus class="w-5" /><span class="whitespace-nowrap">New chat</span>
    </button>
</template>

<script setup lang="ts">
/**
 * 1. Create chat sidebar instace after submit input
 * 2. Add new response to chatInstance on pinia store
 */
import { useRouter } from 'vue-router'
import Plus from '../../icons/plus.vue'
import { useSideBarStoreAzureStore } from '../../../stores/sideBarStoreAzure'

const store = useSideBarStoreAzureStore()
const router = useRouter()

function handleNewChat() {
    store.clear_chatId_and_messages()
    router.push('/kraalai')
    store.handleAnimateChatBox();
}
</script>
