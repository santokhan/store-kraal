<template>
    <RouterLink :to="props.item.to" class="w-full flex items-center hover:bg-chatgpt-700">
        <div class="w-[2.5rem] h-[2.5rem] flex justify-center items-center">

            <slot></slot>
        </div>
        {{ props.item.name }}
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props = defineProps<{ item: { name: string, to: string } }>()
</script>
