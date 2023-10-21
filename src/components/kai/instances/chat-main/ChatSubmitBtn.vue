<template>
    <button type="submit" :disabled="props.disabled" title="Send message" :class="[
        'w-8 h-8 grid place-items-center rounded-md text-gray-100 bg-kraal-blue-500 hover:bg-kraal-blue-600',
        'disabled:opacity-40 disabled:bg-transparent']">
        <Telegram class="h-4" />
    </button>
</template>

<script setup lang="ts">
import Telegram from '../../../icons/telegram.vue';

const props = defineProps<{ disabled: boolean }>();
</script>
