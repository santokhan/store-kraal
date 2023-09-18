<template>
    <button type="button" @click="store.addNewInstance" :class="[
        'text-white text-sm border border-gray-600 rounded-md',
        'w-full h-[3rem] max-h-[3rem] overflow-hidden p-2',
        'flex items-center gap-2',
        'hover:bg-chatgpt-700 my-2'
    ]">
        <Plus class="w-5" />
        <span class="whitespace-nowrap">New chat</span>
    </button>
</template>

<script setup lang="ts">
import { useSideBarStoreAzureStore } from '../../../stores/sideBarStoreAzure';
import Plus from '../../icons/plus.vue';

const store = useSideBarStoreAzureStore()
</script>

<style scoped></style>