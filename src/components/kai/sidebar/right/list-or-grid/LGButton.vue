<template>
    <button type="button" class="w-9 h-9 grid place-items-center rounded-lg"
        :class="[props.active ? 'text-kraal-purple-500' : 'text-white hover:text-gray-200']">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ active: boolean }>()
</script>
