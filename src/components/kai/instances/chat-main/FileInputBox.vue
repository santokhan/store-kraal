<template>
    <div :class="[
        'w-[2rem] max-w-[2rem] h-[2rem] max-h-[2rem] flex justify-center items-center overflow-hidden',
        'text-gray-400 hover:bg-chatgpt-500 rounded-lg relative'
    ]">
        <DocumentIcon class="w-5 h-5" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { DocumentIcon } from '@heroicons/vue/24/outline';
import Attachment from '../../../icons/attachment.vue';
</script>

<style scoped></style>