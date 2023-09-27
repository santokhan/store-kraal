<template>
    <RouterLink to="/kraalai" :class="[
        'text-white text-sm border border-gray-600 rounded-md',
        'w-full h-[3rem] max-h-[3rem] overflow-hidden p-2',
        'flex items-center gap-2',
        'hover:bg-chatgpt-700 my-2'
    ]">
        <Plus class="w-5" />
        <span class="whitespace-nowrap">New chat</span>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Plus from '../../icons/plus.vue'

/**
 * 1. Create chat sidebar instace after submit input
 * 2. Add new response to chatInstance on pinia store
 */
</script>

<style scoped></style>