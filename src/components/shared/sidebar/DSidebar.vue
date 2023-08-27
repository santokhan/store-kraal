<template>
    <div :class="[
        'hidden xl:block relative borderr bg-white', 
        'lg:h-[calc(100dvh_-_64px)] min-w-[280px] py-4 w-60',
    ]">
        <SidebarNav />
    </div>
</template>
  
<script lang="ts" setup>
import SidebarNav from "./nav/Nav.vue";
</script>
  
  