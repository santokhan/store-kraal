<template>
    <div :class="[
        'w-[1.95rem] min-w-[1.95rem] h-[1.95rem] rounded-full bg-gray-400',
        'text-md font-bold text-chatgpt-500',
        'grid place-items-center'
    ]">
        {{ props.name }}
    </div>
</template>

<script setup lang="ts">
type Name = string;
const props = defineProps<{ name: Name }>();
</script>

<style scoped></style>