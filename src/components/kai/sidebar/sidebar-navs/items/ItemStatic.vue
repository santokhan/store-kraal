<template>
    <RouterLink :to="`/kraalai/${props.instance.id}`"
        class="h-12 flex justify-center items-center gap-3 px-3 rounded-md hover:bg-chatgpt-700/60 break-all bg-chatgpt-600 group cursor-pointer">
        <Ellipse :color="props.color" />
        <div class="w-full text-sm text-white block flex-grow-0 relative overflow-hidden whitespace-nowrap">
            {{ props.instance.name }}
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Chat from '../../../../icons/chat.vue'
import { SideBarData } from '../../../../../kraal-api/types.azureAPI';
import Ellipse from './Ellipse.vue';

const props = defineProps<{ instance: SideBarData, color: string }>()
</script>

<style scoped></style>