<template>
    <div class="relative h-full w-full flex-1 items-start border-white/20 overflow-y-auto -mr-2 scrollbar-dark">
        <Legend>Today</Legend>
        <div v-for="(instance, i) in sideBarList" :key="i" class="text-white">
            <ItemForm v-if="chatId === instance.id" :chat="instance" :color="colorList[i]" />
            <ItemStatic v-else :instance="instance" :color="colorList[i]" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Legend from '../Legend.vue';
import ItemForm from './items/ItemForm.vue'
import ItemStatic from './items/ItemStatic.vue'
import { ref } from 'vue';
import { useSideBarStoreAzureStore } from '../../../../stores/sideBarStoreAzure';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute()
const chatId = ref<number>()
if (typeof route.params.id === 'string') {
    chatId.value = parseInt(route.params.id)
}
const store = useSideBarStoreAzureStore()
const { sideBarList } = storeToRefs(store)

// Tailwind colors -500
const colorList = [
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
    "#ef4444",
    "#f97316",
    "#f59e0b",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#06b6d4",
    "#0ea5e9",
    "#6366f1",
    "#8b5cf6",
    "#d946ef",
    "#f43f5e",
]
</script>

