<template>
    <div class="flex items-start justify-between p-4 border-b border-chatgpt-400 rounded-t">
        <h3 class="text-xl font-semibold text-gray-200">
            Introducing Custom Instructions
        </h3>
        <button type="button" @click="props.handleCancel"
            class="text-gray-400 bg-transparent hover:text-gray-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
        </button>
    </div>
    <div class="p-4 sm:p-6 sm:pt-4">
        <p class="text-muted pb-3 pt-2 text-sm">What would you like ChatGPT to know about you
            to provide better responses?</p>
        <div class="mb-3"><textarea
                class="w-full	resize-none rounded p-4 placeholder:text-gray-300 border border-chatgpt-400 focus:border-brand-green"
                rows="7" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1d:"
                data-state="closed"></textarea>
            <div class="flex items-center justify-between px-1 text-xs text-gray-400">
                <div>0/1500</div><button class="flex items-center gap-1 text-gray-200"></button>
            </div>
        </div>
        <p class="text-muted py-3 text-sm">How would you like ChatGPT to respond?</p>
        <div><textarea
                class="w-full	resize-none rounded p-4 placeholder:text-gray-300 border border-chatgpt-400 focus:border-brand-green"
                rows="7" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1h:"
                data-state="closed"></textarea>
            <div class="flex items-center justify-between px-1 text-xs text-gray-400">
                <div>0/1500</div><button class="flex items-center gap-1 text-gray-200"></button>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-end p-6 space-x-2 border-t border-chatgpt-400">
        <button data-modal-hide="default-modal" type="button" @click="props.handleCancel"
            class="text-gray-700 bg-gray-50 hover:bg-gray-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
        <button data-modal-hide="default-modal" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ handleCancel: () => void }>()
</script>
