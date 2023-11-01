<template>
    <button type="button" class="w-9 h-9 grid place-items-center rounded-xl text-gray-100"
        :class="[props.active ? 'bg-kraal-purple-500' : 'hover:bg-white/5']">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ active: boolean }>()
</script>
