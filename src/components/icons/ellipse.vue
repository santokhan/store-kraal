<template>
    <div class="w-8">
        <div class="w-6 h-6 rounded-full shadow-md" :style="{ background: props.bg }"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ bg: string }>()
</script>
