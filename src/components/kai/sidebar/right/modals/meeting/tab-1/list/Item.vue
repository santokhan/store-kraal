<template>
    <li class="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
        <div>
            <h5 class="text-white font-medium">Meeting Title</h5>
            <p class="text-sm text-kraal-purple-500">Oct 20 2023</p>
        </div>
        <div class="flex items-center justify-between gap-4">
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                    class="w-11 h-6 bg-chatgpt-400 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-300">AI Attend</span>
            </label>
        </div>
    </li>
</template>

<script setup lang="ts">
// defineProps<{ title: string, date: string, label: string, active: boolean }>()
</script>

<style scoped></style>