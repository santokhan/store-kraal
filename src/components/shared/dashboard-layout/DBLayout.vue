<template>
    <div class="flex flex-col h-screen max-h-[100dvh] w-full lg:overflow-hidden">
        <Header />


        <div class="lg:h-full lg:flex">
            <Sidebar />


            <main class="w-full lg:h-[calc(100dvh_-_64px)] lg:overflow-auto relative bg-gray-100">
                <!-- top spacing for fixed navbar in mobile -->
                <div class="py-10 lg:py-0"></div>                
                <slot></slot>
            </main>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import Header from '../header/dashbboard/DashHeader.vue';
import Sidebar from '../sidebar/DSidebar.vue';
</script>

