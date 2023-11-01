<template>
    <button type="button" :class="[
        view === 'GRID' && 'min-h-[6rem] w-full p-4 grid place-items-center gap-2 rounded-xl bg-kraal-purple-500 hover:bg-kraal-purple-500/80 border-t border-t-white/30',
        view === 'LIST' && 'col-span-2 h-[3.75rem] w-full px-4 flex items-center gap-2 rounded-xl bg-kraal-purple-500 hover:bg-kraal-purple-500/80 border-t border-t-white/30'
    ]">
        <div class="w-8 h-8 grid place-items-center overflow-hidden">
            <slot></slot>
        </div>
        <div class="whitespace-nowrap overflow-hidden text-ellipsis text-start" :title="props.text">{{ props.text }}</div>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string, view: string }>()
</script>