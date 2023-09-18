<template>
    <button type="button" :class="[
        'flex items-center justify-center pr-1',
        'h-[2.75rem] min-h-[2.75rem] w-[1.5rem] min-w-[1.5rem] absolute left-full top-1/2 -translate-y-1/2 z-[11]',
        'transition-colors duration-200 text-white text-sm rounded-r-full bg-chatgpt-600 z-10'
    ]">
        <i :class="['fa fa-angle-left transition-transform linear text-lg', store.getSidebar() ? 'scale-x-100' : '-scale-x-100']"></i>
    </button>
</template>

<script setup lang="ts">
import { useChatSideBarStore } from '../../../stores/chatSideBar';

const store = useChatSideBarStore()
</script>

<style scoped></style>