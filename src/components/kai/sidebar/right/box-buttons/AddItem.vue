<template>
    <button type="button" :class="[
        'rounded-lg space-y-4 border-t border-t-white/30',
        'bg-chatgpt-400 hover:bg-kraal-purple-500/80',
        props.view === 'GRID' ? 'grid place-items-center p-4 min-h-[6rem]' : 'col-span-2 h-[3.75rem] w-full px-4 py-3 grid place-items-center gap-2'
    ]">
        <div class="w-8 h-8 grid place-items-center overflow-hidden">
            <i class="fa fa-plus text-xl" aria-hidden="true"></i>
        </div>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ view: string }>()
</script>