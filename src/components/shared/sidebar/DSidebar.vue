<template>
    <div :class="[
        'hidden xl:flex flex-col justify-between relative bg-white',
        'lg:h-[calc(100dvh_-_64px)] min-w-[280px] pt-4 w-60'
    ]">
        <SidebarNav />
        <div class="">
            <SidebarFooter />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import SidebarFooter from "./SidebarFooter.vue";
import SidebarNav from "./nav/Nav.vue";
</script>
  
  