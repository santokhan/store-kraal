<template>
    <label for="chatInput" class="w-full">
        <button type="button" @click="store.addNewInstance" :class="[
            'w-full p-2 duration-200 text-white text-sm border rounded-md h-11 overflow-hidden',
            'flex items-center flex-grow flex-shrink-0 gap-2',
            'hover:bg-gray-500/10 focus:bg-white/20'
        ]">
            <Plus class="w-5" />
            <span class="whitespace-nowrap">New chat</span>
        </button>
    </label>
</template>

<script setup lang="ts">
import { useChatSideBarStore } from '../../../stores/chatSideBar';
import Plus from '../../icons/plus.vue';

const store = useChatSideBarStore()
</script>

<style scoped></style>