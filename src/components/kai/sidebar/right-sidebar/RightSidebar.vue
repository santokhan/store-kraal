<template>
    <Container>
        <button type="button" v-for="(item, index) in sidebarItems" :key="index" :class="[
            'min-h-[6rem] rounded-lg p-4 space-y-4 bg-kraal-purple-500 hover:bg-kraal-purple-500/80',
            'border-t border-t-white/30',
        ]">
            <div class="h-6 w-6 grid place-items-center">
                <i v-if="item.name === sidebarItems[0].name" class="fa fa-cog text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[1].name" class="fa fa-video text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[2].name" class="fa fa-code text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[3].name" class="fa fa-tasks text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[4].name" class="fa fa-upload text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[5].name" class="fa fa-info text-xl" aria-hidden="true"></i>
            </div>
            <h5 class="font-medium text-start">{{ item.name }}</h5>
        </button>
        <button type="button" @click="isOpen = !isOpen" :class="[
            'min-h-[6rem] rounded-lg p-4 space-y-4 border-t border-t-white/30 grid place-items-center',
            'bg-chatgpt-400 hover:bg-kraal-purple-500/80']" title="Add new">
            <i class="fa fa-plus text-xl" aria-hidden="true"></i>
        </button>
    </Container>

    <Teleport to="body">
        <div class="z-[51] fixed inset-0 bg-white/10 grid place-items-center" v-if="isOpen">
            <div class="w-full max-w-xl mx-auto bg-chatgpt-600 text-gray-400 rounded-xl modal-shadow" ref="target">
                <div class="px-4 py-4 shadow-lg shadow-black/15">
                    <h3 class="font-semibold">Add new feature</h3>
                </div>
                <div class="h-48 grid place-items-center">
                    <h3 class="text-2xl font-semibold">Feature Coming Soon!</h3>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core';
import Container from './Container.vue';
import { sidebarItems } from './sidebarItem';

const target = ref<any>(null)
const isOpen = ref<boolean>(false)

onClickOutside(target, () => {
    isOpen.value = !isOpen.value
})
</script>

<style scoped>
.modal-shadow {
    box-shadow: inset 0 0 2px 2px rgba(255, 255, 255, 0.05);
}
</style>