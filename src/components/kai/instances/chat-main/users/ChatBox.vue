<template>
    <div :class="[
        'w-full md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto px-4 py-7',
        'text-base tracking-wider group',
        'flex gap-4 items-start'
    ]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>