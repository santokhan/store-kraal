<template>
    <div class="relative row-auto w-full rounded-lg text-left transition-all w-full">
        <div tabindex="-1" aria-hidden="true"
            class="w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <div class="relative bg-chatgpt-600 rounded-lg">
                    <div class="flex items-start justify-between p-4 border-b border-chatgpt-400 rounded-t">
                        <h3 class="text-xl font-semibold text-gray-200">
                            Introducing Custom Instructions
                        </h3>
                        <button type="button" @click="props.handleModal"
                            class="text-gray-400 bg-transparent hover:text-gray-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-6 space-y-6">
                        <p class="text-base leading-relaxed text-gray-200">
                            Customize your interactions with ChatGPT by providing specific details and guidelines
                            for your chats.
                        </p>
                        <p class="text-base leading-relaxed text-gray-200">
                            Whenever you edit your custom instructions, they'll take effect in all new chats you
                            create. Existing chats won't be updated.
                        </p>
                        <p class="text-base leading-relaxed text-gray-400">
                            Your instructions will be used to make our models better unless you've opted out and may
                            be shared with any plugins you've enabled. Visit our Help Center to learn more.
                        </p>
                    </div>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b border-chatgpt-400">
                        <button data-modal-hide="default-modal" type="button" @click="props.handleFormIsOpen"
                            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I
                            accept</button>
                        <button data-modal-hide="default-modal" type="button" @click="props.handleModal"
                            class="text-gray-700 bg-gray-50 hover:bg-gray-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ handleFormIsOpen: () => void, handleModal: () => void }>()
</script>
