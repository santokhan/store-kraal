<template>
    <a
        class="flex p-3 items-center justify-center transition-colors duration-200 text-white text-sm rounded-md border border-white/20 h-11 w-11 flex-shrink-0 hover:bg-gray-500/10">
        <!-- removed gap-3 and flex-grow to just show the icon -->
        <Layout class="w-6" />
        <span class="absolute border-none w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden whitespace-nowrap overflow"
            style="clip: rect(0px, 0px, 0px, 0px); overflow-wrap: normal;">Hide sidebar</span>
    </a>
</template>

<script setup lang="ts">
import Layout from '../../icons/layout.vue'
</script>

<style scoped></style>