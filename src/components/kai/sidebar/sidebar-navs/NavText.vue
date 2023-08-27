<template>
    <div class="w-full text-sm text-white block flex-grow-0 relative overflow-hidden whitespace-nowrap">
        <slot></slot>
        <div class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-chatgpt-700">
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>