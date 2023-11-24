<template>
    <button v-if="props.view === 'GRID'" type="button"
        class="w-full aspect-square p-4 grid place-items-center rounded-xl bg-kraal-purple-500 hover:bg-kraal-purple-500/60">
        <IconBox>
            <slot></slot>
        </IconBox>
        <div class="whitespace-nowrap overflow-hidden text-ellipsis text-start" :title="props.data.name">
            {{ props.data.name }}
        </div>
    </button>

    <button v-else type="button"
        class="col-span-2 h-[3.75rem] w-full aspect-square px-4 flex items-center gap-2 rounded-xl bg-kraal-purple-500 hover:bg-kraal-purple-500/80 border-t border-t-white/30">
        <div class="w-7 h-7 grid place-items-center overflow-hidden text-3xl">
            <slot></slot>
        </div>
        <div class="whitespace-nowrap overflow-hidden text-ellipsis text-start group-hover:text-white"
            :title="props.data.name">{{ props.data.name }}
        </div>
    </button>
</template>

<script setup lang="ts">
import IconBox from './IconBox.vue';

type Props = {
    data: {
        name: string,
    },
    view: string
}
const props = defineProps<Props>()
</script>