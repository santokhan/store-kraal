<template>
    <button type="button" :class="[
        'min-h-[6rem] rounded-lg p-4 bg-kraal-purple-500 hover:bg-kraal-purple-500/80 border-t border-t-white/30',
        'flex flex-col justify-start gap-2'
    ]">
        <slot></slot>
        <h5 class="text-start">{{ props.text }}</h5>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>