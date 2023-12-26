<template>
    <RouterLink :to="props.to || '/kraalai'" :class="[
        'grid place-items-center text-gray-200 rounded-lg py-1.5 px-3', 'hover:bg-white/10 focus:text-white focus:bg-white/20'
    ]">
        {{ props.text || 'Back' }}
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

type Props = {
    to?: string;
    text?: string;
}
const props = defineProps<Props>();
</script>

<style scoped></style>