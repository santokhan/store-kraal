<template>
    <aside class="bg-chatgpt-600 text-white fixed lg:relative right-0 top-0 bottom-0">
        <div class="absolute right-full top-1/2 -translate-y-1/2 z-[11]">
            <ChatSideBarToggler @click="isOpen = !isOpen" :isOpen="isOpen" :flip="true" />
        </div>
        <div v-if="isOpen" class="w-72 lg:w-[340px] p-4" :class="props.view === 'GRID' ? 'gap-4' : 'gap-3'">
            <slot></slot>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatSideBarToggler from '../ChatSideBarToggler.vue';

const isOpen = ref(false)
const props = defineProps<{ view: string }>()
</script>
