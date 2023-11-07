<template>
    <div class="relative flex rounded-xl bg-chatgpt-400 p-1.5">
        <textarea type="button" rows="1" placeholder="Send a message..." 
            class="w-full h-full placeholder:text-gray-300 focus:outline-none mx-1 my-1"></textarea>
        <div class="flex items-end">
            <button type="submit" title="Send message"
                class="w-8 h-8 grid place-items-center rounded-lg text-gray-100 bg-kraal-blue-500 hover:bg-kraal-blue-600">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
                    <path
                        d="M12.2373 7.99996L8.86858 9.78967V6.2101L12.2373 7.99996ZM2.5 2.82636L8.3571 5.93835L2.5 4.84014V2.82636ZM2.5 11.1598L8.35644 10.0618L2.5 13.1732V11.1598ZM1.68458 11.3127L1.68532 11.3126C1.68488 11.3127 1.68444 11.3128 1.684 11.3128L1.68458 11.3127Z"
                        stroke="currentColor" stroke-width="4"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>