<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="relative row-auto w-full rounded-lg text-left shadow-xl transition-all bg-chatgpt-600 max-w-2xl text-gray-200">
                <div class="flex items-center justify-between p-4 border-b border-chatgpt-400 rounded-t">
                    <button type="button" @click="props.handleModal"
                        class="text-gray-400 bg-transparent hover:text-gray-200 rounded-lg text-sm w-8 h-8 grid place-items-center">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <h3 class="text-xl font-semibold text-white"><!-- Server data -->Buddy</h3>
                    <button type="button" @click="props.handleModal"
                        class="text-gray-400 bg-transparent hover:text-gray-200 rounded-lg text-sm w-8 h-8 grid place-items-center">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 sm:p-6 sm:pt-4">
                    <div class="mb-3"><textarea
                            class="w-full	resize-none rounded p-4 placeholder:text-gray-300 border border-chatgpt-400 focus:border-brand-green"
                            rows="7" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1d:"
                            data-state="closed"></textarea>
                        <div class="flex items-center justify-between px-1 text-xs text-gray-400">
                            <div>0/1500</div><button class="flex items-center gap-1 text-gray-200"></button>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end px-6 py-4 space-x-2 border-t border-chatgpt-400">
                    <button data-modal-hide="default-modal" type="button" @click="props.handleModal"
                        class="text-gray-700 bg-gray-50 hover:bg-gray-300 rounded-lg text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                    <button data-modal-hide="default-modal" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import ModalContainer from '../../../../modal/ModalContainer.vue';

const props = defineProps<{ handleModal: () => void }>();
const modal = ref<any>(null);
// const formIsOpen = ref<boolean>(false);

onClickOutside(modal, props.handleModal)
// function handleFormIsOpen() { formIsOpen.value = !formIsOpen.value; }
</script>
