<template>
    <div class="relative h-full w-full flex-1 items-start border-white/20 overflow-y-auto -mr-2 scrollbar-dark">
        <Legend>Today</Legend>
        <!-- [ Chat message 1 ] -->
        <div v-for="(instance, i) in store.getFullChatList()" :key="i" class="text-white">
            <ItemForm v-if="store.activeNavIndex === instance.id" :chat="instance" />
            <ItemStatic v-else :handleClick="() => { store.setActiveIndex(instance.id) }" :text="instance.nav" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Legend from '../Legend.vue';
import { useChatSideBarStore } from '../../../../stores/chatSideBar'
import ItemForm from './items/ItemForm.vue'
import ItemStatic from './items/ItemStatic.vue'

const store = useChatSideBarStore()
</script>

