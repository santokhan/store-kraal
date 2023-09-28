<template>
    <RouterLink :to="props.to" class="w-full flex items-center hover:bg-white"
        :class="[path === props.to ? 'bg-white' : '']">
        <slot></slot>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
const props = defineProps<{ to: string }>()

const route = useRoute()
const path = route.path
</script>

<style scoped></style>