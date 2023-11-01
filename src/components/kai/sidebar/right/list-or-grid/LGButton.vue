<template>
    <button type="button" class="w-10 h-10 grid place-items-center rounded-lg"
        :class="[props.active ? 'bg-kraal-purple-500' : 'bg-white/10 hover:bg-white/5']">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ active: boolean }>()
</script>
