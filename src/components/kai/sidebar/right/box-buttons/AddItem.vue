<template>
    <RouterLink :to="path" v-if="props.view === 'GRID'" type="button" :class="[
        'rounded-xl space-y-4', 'grid place-items-center',
        'p-4 w-full aspect-square',
        'border border-gray-500 hover:bg-white/10 focus:bg-transparent'
    ]">
        <IconBox>
            <PlusCircleIcon class="w-full h-full" />
        </IconBox>
        {{ name }}
    </RouterLink>

    <RouterLink :to="path" v-else type="button" :class="[
        'rounded-xl space-y-4', 'flex place-items-center gap-3',
        'h-[3.75rem] px-4 col-span-2 w-full',
        'border border-gray-500 hover:bg-white/10 focus:bg-transparent'
    ]">
        <PlusCircleIcon class="w-7 h-7" />
        {{ name }}
    </RouterLink>
</template>

<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import IconBox from './IconBox.vue';

type Props = { view: string, to: string };
const props = defineProps<Props>();
const name = 'Add Feature';
const path = '/kraalai/' + props.to;
</script>