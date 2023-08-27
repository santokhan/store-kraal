<template>
    <div :class="[
        'w-full h-16 lg:h-20 bg-slate-50 border-b',
        'px-4 sm:px-6 md:px-8 lg:px-12',
        'flex items-center justify-between',
        'z-[1] fixed top-0'
    ]">
        <Kraal class="text-kraal-blue-500 h-7" />
        <ProfileOnHeader />
    </div>
</template>

<script setup lang="ts">
import Kraal from '../../icons/kraal.vue';
import ProfileOnHeader from './profile/ProfileOnHeader.vue';
</script>

<style scoped></style>