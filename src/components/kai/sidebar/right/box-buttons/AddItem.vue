<template>
    <RouterLink :to="path" v-if="props.view === 'GRID'" :class="['grid place-items-center p-4 aspect-square', tw]">
        <IconBox>
            <PlusCircleIcon class="w-full h-full" />
        </IconBox>
        {{ name }}
    </RouterLink>
    <RouterLink :to="path" v-else :class="['col-span-2 flex place-items-center gap-3 p-4', tw]">
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
const tw = ['rounded-xl space-y-4', 'border border-gray-500 hover:bg-white/10 focus:bg-transparent'].join(" ");
</script>