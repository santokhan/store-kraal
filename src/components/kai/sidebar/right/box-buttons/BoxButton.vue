<template>
    <button type="button" :class="[
        'min-h-[6rem] w-full p-4 grid place-items-center gap-2 rounded-lg',
        'bg-kraal-purple-500 hover:bg-kraal-purple-500/80 border-t border-t-white/30'
    ]">
        <div class="w-8 h-8 grid place-items-center overflow-hidden">
            <slot></slot>
        </div>
        <div class="w-full whitespace-nowrap overflow-hidden text-ellipsis" :title="props.text">{{ props.text }}</div>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>