<template>
    <button type="submit" :disabled="props.disabled" title="Send message"
        class="w-8 h-8 grid place-items-center rounded-md text-gray-100 hover:bg-kraal-blue-500 disabled:opacity-40">
        <Telegram class="h-4" />
    </button>
</template>

<script setup lang="ts">
import Telegram from '../../../icons/telegram.vue';

const props = defineProps<{ disabled: boolean }>()
</script>
