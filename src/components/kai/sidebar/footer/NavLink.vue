<template>
    <RouterLink :to="props.to" class="w-full flex items-center hover:bg-chatgpt-700">
        <slot></slot>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props = defineProps<{ to: string }>()
</script>

<style scoped></style>