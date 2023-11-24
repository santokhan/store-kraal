<template>
    <RouterLink v-if="props.data.to" :to="path" :class="[
        'w-full rounded-xl aspect-square bg-kraal-purple-500 hover:bg-kraal-purple-500/60',
        checker(['p-4', 'grid place-items-center'], ['col-span-2 h-[3.75rem] px-4', 'border-t border-t-white/30', 'flex items-center gap-2'])
    ]">
        <div :class="['grid place-items-center overflow-hidden text-3xl', checker('w-8 lg:w-12 h-8 lg:h-12', 'w-7 h-7')]">
            <slot></slot>
        </div>
        <div :class="['whitespace-nowrap overflow-hidden text-ellipsis text-start', checker('', 'group-hover:text-white')]">
            {{ props.data.name }}
        </div>
    </RouterLink>
    <button v-else type="button" :class="[
        'w-full rounded-xl aspect-square bg-kraal-purple-500 hover:bg-kraal-purple-500/60',
        checker(['p-4', 'grid place-items-center'], ['col-span-2 h-[3.75rem] px-4', 'border-t border-t-white/30', 'flex items-center gap-2'])
    ]">
        <div :class="['grid place-items-center overflow-hidden text-3xl', checker('w-8 lg:w-12 h-8 lg:h-12', 'w-7 h-7')]">
            <slot></slot>
        </div>
        <div :class="['whitespace-nowrap overflow-hidden text-ellipsis text-start', checker('', 'group-hover:text-white')]">
            {{ props.data.name }}
        </div>
    </button>
</template>

<script setup lang="ts">
type Props = {
    data: {
        name: string
        to?: string
    },
    view: string
}
const props = defineProps<Props>()

type tailwind = Array<string> | string
function checker(gridCSS: tailwind, flexCSS: tailwind): string {
    const ternary = (css: tailwind) => typeof css === 'string' ? css : css.join(' ');

    if (props.view === "GRID") {
        return ternary(gridCSS);
    } else {
        return ternary(flexCSS);
    }
}

const path = '/kraalai/' + props.data.to;
</script>
