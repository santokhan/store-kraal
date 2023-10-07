<template>
    <Teleport to="body">
        <div class="fixed inset-0 bg-black/10 z-50" v-if="props.isOpenModal">
            <div
                class="grid-cols-[10px_1fr_10px] grid h-full w-full grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] md:grid-rows-[minmax(20px,_1fr)_auto_minmax(20px,_1fr)] overflow-y-auto">
                <div class="relative col-auto col-start-2 row-auto row-start-2 w-full rounded-lg text-left shadow-xl transition-all left-1/2 -translate-x-1/2 bg-chatgpt-600 max-w-xl"
                    ref="modal">
                    <div class="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-white/10">
                        <div class="flex">
                            <div class="flex items-center">
                                <div class="flex flex-col gap-1 text-center sm:text-left">
                                    <h2 class="text-lg font-medium leading-6 text-gray-200">
                                        Introducing Custom Instructions</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 sm:p-6 sm:pt-4 text-gray-200">
                        <div class="mb-6 flex flex-col gap-3">
                            <p>Customize your interactions with ChatGPT by providing specific details and guidelines for
                                your chats.</p>
                            <p>Whenever you edit your custom instructions, they'll take effect in all new chats you
                                create. Existing chats won't be updated.</p>
                        </div>
                        <div class="flex flex-col gap-3 text-sm text-gray-400">
                            <p>Your instructions will be used to make our models better unless you've opted out and may
                                be shared with any plugins you've enabled. Visit our <a href="" class="underline"
                                    rel="noopener noreferrer">Help Center</a> to learn more.</p>
                        </div>
                        <div class="mt-5 sm:mt-4">
                            <div class="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse"><button
                                    class="h-10 px-4 text-chatgpt-600 font-semibold rounded-lg bg-gray-400 hover:bg-gray-500">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
const props = defineProps<{ isOpenModal: boolean, handleModal: () => void }>();

// Create a ref and set it to null initially
const modal = ref(null);

onClickOutside(modal, () => {
    props.handleModal()
})
</script>
