<template>
    <div class="w-[.75rem] min-w-[.75rem] h-[.75rem] min-h-[.75rem] rounded-full"
        :style="{ background: props.color }"></div>
</template>

<script setup lang="ts">
const props = defineProps<{ color: string }>()
</script>

<style scoped></style>