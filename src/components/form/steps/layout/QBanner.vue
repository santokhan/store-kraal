<script lang="ts" setup>const props = defineProps({src: String})
</script>

<template>
    <img :src='props.src' alt='question banner' class="w-full max-w-sm h-80 lg:h-96 bg-white rounded shadow-2xl shadow-gray-500/5 overflow-hidden object-cover border-none m-4">
</template>