<template>
    <p class="text-xs text-center px-4 py-2 lg:py-3 text-gray-300 w-full whitespace-nowrap overflow-hidden text-ellipsis">
        {{ info[1] }}
    </p>
</template>

<script setup lang="ts">
const info = ["AI may produce inaccurate information about certain facts.", "Warning: KraalAI can make mistakes. Make sure to verify its outputs."]
</script>

<style scoped></style>