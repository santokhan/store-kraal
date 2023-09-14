<template>
    <label for="chatInput" class="w-full">
        <button type="button" @click="store.addNewInstance"
            class="w-full flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm border rounded-md h-11 flex-grow flex-shrink-0 hover:bg-gray-500/10">
            <Plus class="w-5" />New chat
        </button>
    </label>
</template>

<script setup lang="ts">
import { useChatSideBarStore } from '../../../stores/chatSideBar';
import Plus from '../../icons/plus.vue';

const store = useChatSideBarStore()
</script>

<style scoped></style>