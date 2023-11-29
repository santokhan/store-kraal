<template>
    <button type="button" @click="handleNewChat" :class="[
        'w-full overflow-hidden px-3 py-1.5 my-2 flex items-center gap-2',
        'text-white text-sm border border-gray-600 rounded-md',
        'hover:bg-chatgpt-700'
    ]">
        <Kraalai class="w-5" />
        <span class="whitespace-nowrap font-normal">Start new chat</span>
    </button>
</template>

<script setup lang="ts">
/**
 * 1. Create chat sidebar instace after submit input
 * 2. Add new response to chatInstance on pinia store
 */
import { useRouter } from 'vue-router';
import { useSideBarStoreAzureStore } from '../../../../stores/sideBarStoreAzure';
import Kraalai from '../../../icons/kraalai.vue';

const store = useSideBarStoreAzureStore()
const router = useRouter()

function handleNewChat() {
    store.clear_chatId_and_messages()
    router.push('/kraalai')
    store.handleAnimateChatBox();
}
</script>
