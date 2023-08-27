<template>
    <button type="button" :class="[
        'bg-kraal-blue-500 rounded-lg h-8 px-3 font-medium text-white',
        'hover:bg-kraal-blue-600', 'focus:ring focus:ring-kraal-blue-500/50',
        'shadow-md shadow-kraal-blue-500/30'
    ]">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped></style>