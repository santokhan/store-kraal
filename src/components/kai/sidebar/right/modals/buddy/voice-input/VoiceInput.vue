<template>
    <button type="button" :class="[
        'w-60 lg:w-96 h-60 lg:h-96 grid place-items-center relative text-indigo-500',
        'hover:text-indigo-600 focus:text-indigo-700'
    ]">
        <ColorDots />
        <div class="rounded-full radial-gradient p-1">
            <div class="w-full h-full bg-chatgpt-600 rounded-full grid place-items-center">
                <Mic />
            </div>
        </div>
    </button>
</template>

<script setup lang="ts">
import ColorDots from './ColorDots.vue';
import Mic from './Mic.vue';
</script>

<style scoped>
.radial-gradient {
    width: 44%;
    height: 44%;
    background-image: conic-gradient(from 180deg at 50% 50%, #FFC876 35deg, #79FFF7 153deg, #9F53FF 258deg, #FF98E2 360deg);
}

.circle-dots-1 {
    border: 4px dashed white;
}
</style>