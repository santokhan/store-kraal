<template>
    <RouterLink :to="props.item.to" class="w-full flex items-center hover:bg-chatgpt-700">
        <IconBox>
            <slot></slot>
        </IconBox>
        {{ props.item.name }}
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconBox from './IconBox.vue';
const props = defineProps<{ item: { name: string, to: string } }>()
</script>
