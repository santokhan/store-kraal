<template>
    <div @click="props.handleClick"
        class="h-12 flex justify-center items-center gap-3 px-3 rounded-md hover:bg-chatgpt-700 break-all bg-chatgpt-600 group cursor-pointer">
        <Chat class="w-4 min-w-[16px]" />
        <div class="w-full text-sm text-white block flex-grow-0 relative overflow-hidden whitespace-nowrap">
            {{ props.text }}</div>
    </div>
</template>

<script setup lang="ts">
import Chat from '../../../../icons/chat.vue'

const props = defineProps<{
    text: string,
    handleClick: () => void
}>()
</script>

<style scoped></style>