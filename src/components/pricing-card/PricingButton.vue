<template>
    <button type="button" :class="[
        'flex justify-center',
        'text-white bg-kraal-blue-500 font-medium rounded-xl px-4 py-3 w-full',
        'hover:bg-kraal-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200'
    ]">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped></style>