<template>
    <aside class="bg-chatgpt-600 text-white fixed lg:relative right-0 top-0 bottom-0">
        <button type="button" @click="isOpen = !isOpen" :class="[
            'flex items-center justify-center pl-1',
            'h-[2.75rem] min-h-[2.75rem] w-[1.5rem] min-w-[1.5rem] absolute right-full top-1/2 -translate-y-1/2 z-[11]',
            'transition-colors duration-200 text-white text-sm rounded-l-full bg-chatgpt-600 z-10'
        ]"><i
                :class="['fa fa-angle-right transition-transform linear text-lg', isOpen ? 'scale-x-100' : '-scale-x-100']"></i>
        </button>

        <div v-if="isOpen" class="w-72 lg:w- [320px] lg:w-[364px] p-4"
            :class="props.view === 'GRID' ? 'gap-4' : 'gap-3'">
            <slot></slot>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false)
const props = defineProps<{ view: string }>()
</script>
