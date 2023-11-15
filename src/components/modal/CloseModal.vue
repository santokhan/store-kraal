<template>
    <button type="button" @click="props.handleClick"
        class="text-gray-400 hover:text-gray-200 rounded-lg text-sm w-8 h-8 grid place-items-center">
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    handleClick: () => void
}>()
</script>

<style scoped></style>