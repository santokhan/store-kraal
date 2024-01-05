<template>
    <ProfileEllipse class="bg-gradient-to-r from-sky-400 to-blue-600" title="Customer Name">
        <UserIcon class="h-full w-full text-white" />
    </ProfileEllipse>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/solid';
import ProfileEllipse from './ProfileEllipse.vue';
</script>

<style scoped></style>