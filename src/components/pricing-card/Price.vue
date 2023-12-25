<template>
    <div class="flex items-baseline text-gray-900 flex justify-center">
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-bold tracking-tight">{{ props.amount }}</span>
        <span class="ml-1 text-xl font-normal text-gray-500">/month</span>
    </div>
</template>

<script setup lang="ts">
type Props = {
    amount: number
}

const props = defineProps<Props>()
</script>

<style scoped></style>