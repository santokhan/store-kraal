<template>
    <button type="button" title="Button" @click="props.handleToggle"
        class="rounded-lg px-2 py-1 border flex items-center gap-2 leading-[1]">
        <slot></slot>
        <svg class="transition-transform ease-in-out" :class="props.state ? '-rotate-90' : 'rotate-90'" width="6"
            height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            </path>
        </svg>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ state: boolean; handleToggle: () => void }>()
</script>

<style scoped></style>