<template>
    <div class="relative h-full w-full flex-1 items-start border-white/20 overflow-y-auto -mr-2 scrollbar-dark">
        <Legend>Chats</Legend>
        <div v-for='(instance, i) in disorderByDate(sideBarList)' :key='i' class="text-white">
            <!-- If sidebar item active or clicked -->
            <ItemForm v-if='chatId === instance.id' :chat='instance' :color='colorList[i]' :id='instance.id' />
            <ItemStatic v-else :instance='instance' :color='colorList[i]' />
        </div>
    </div>
</template>

<script setup lang="ts">
import Legend from '../Legend.vue';
import ItemForm from './items/ItemForm.vue';
import ItemStatic from './items/ItemStatic.vue';
import { ref } from 'vue';
import { useSideBarStoreAzureStore } from '../../../../stores/sideBarStoreAzure';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const chatId = ref<number>()
const route = useRoute()
const paramId = route.params.id
if (typeof paramId === 'string') {
    chatId.value = parseInt(paramId)
}
const store = useSideBarStoreAzureStore()
const { sideBarList } = storeToRefs(store)

function disorderByDate(list: any[]) {
    return list.sort((b: any, a: any) => {
        a = new Date(a).getTime()
        b = new Date(b).getTime()

        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    })
}

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

