<template>
    <button type="button" @click="props.handleClick" class="h-12 w-full rounded-lg"
        :class="[active ? 'bg-indigo-500 text-gray-100' : 'hover:bg-chatgpt-400']">Attend</button>
</template>

<script setup lang="ts">
const props = defineProps<{ active: boolean, handleClick: () => void }>()
</script>

<style scoped></style>