<template>
    <div :class="['bg-kraal-blue-500 text-white', 'w-[272px] min-w-[272px] max-w-[272px] h-[calc(100svh_-_80px)] overflow-auto',
        'fixed top-20', 'hidden lg:block']">
        <BlueNavs />
    </div>
</template> 

<script setup lang="ts">
import BlueNavs from '../../dashboard/sidebar-blue/sidebar-navs/BlueNavs.vue';
</script>

<style scoped></style>