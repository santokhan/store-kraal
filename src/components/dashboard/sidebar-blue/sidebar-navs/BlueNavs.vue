<template>
    <ul class="mt-32 list-none space-y-6" v-show="List.length">
        <RouterLink v-for="(item, index) in List" :key="index" :to="item.url" :class="[
            'px-12 h-12 text-lg hover:bg-white/10 relative overflow-hidden',
            'transition-colors ease-in',
            'flex gap-3 items-center',
            activeNav(item.url) ? 'bg-white/10' : ''
        ]">
            <div v-show="activeNav(item.url)"
                class="w-4 h-4 bg-white rounded-lg absolute left-0 active-dot -translate-x-1/2"></div>
            <NavIcon :name="item.icon" />{{ item.name }}
        </RouterLink>
    </ul>
</template> 

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { blueSideBarNavList as List } from '../../../shared/sidebar/nav/navList';
import NavIcon from '../../../shared/sidebar/nav/NavIcon.vue';

function activeNav(navPath: string): boolean {
    const route = useRoute()
    return route.path === navPath;
}
</script>

<style scoped>
.active-dot {
    box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.3);
}
</style>