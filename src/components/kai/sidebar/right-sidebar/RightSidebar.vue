<template>
    <Container>
        <div v-for="(item, index) in sidebarItems" :key="index" :class="[
            'min-h-[6rem] rounded-lg p-4 space-y-4 bg-kraal-purple-500 hover:bg-kraal-purple-500/80',
            'border-t border-t-white/30'
        ]">
            <div class="h-6 w-6 grid place-items-center">
                <i v-if="item.name === sidebarItems[0].name" class="fa fa-cog text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[1].name" class="fa fa-cog text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[2].name" class="fa fa-heart text-xl" aria-hidden="true"></i>
                <i v-else-if="item.name === sidebarItems[3].name" class="fa fa-tasks text-xl" aria-hidden="true"></i>
            </div>
            <h5 class="font-medium">{{ item.name }}</h5>
        </div>
        <div :class="[
            'min-h-[6rem] rounded-lg p-4 space-y-4 bg-chatgpt-400 hover:bg-kraal-purple-500/80',
            'border-t border-t-white/30',
            'grid place-items-center'
        ]"><i class="fa fa-plus text-xl" aria-hidden="true"></i></div>
    </Container>
</template>

<script setup lang="ts">
import Container from './Container.vue';
import { sidebarItems } from './sidebarItem';
</script>