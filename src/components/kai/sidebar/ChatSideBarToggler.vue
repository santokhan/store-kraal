<template>
    <a :class="[
        'flex items-center justify-center',
        'p-3 transition-colors duration-200 text-white text-sm rounded-md border border-white/20 h-11 w-11 hover:bg-gray-500/10 z-10'
    ]">
        <Layout class="w-6" />
    </a>
</template>

<script setup lang="ts">
import Layout from '../../icons/layout.vue'
</script>

<style scoped></style>