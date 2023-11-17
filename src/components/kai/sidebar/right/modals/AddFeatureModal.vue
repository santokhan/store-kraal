<template>
    <Teleport to="body">
        <ModalContainer>
            <div class="relative row-auto w-full rounded-lg text-left transition-all w-full" ref="target">
                <div tabindex="-1" aria-hidden="true"
                    class="w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-2xl mx-auto max-h-full">
                        <div class="relative bg-modal-raisin-black rounded-lg">
                            <div class="flex items-start justify-between p-4 border-b border-chatgpt-400 rounded-t">
                                <h3 class="text-xl font-semibold text-gray-200">Introducing Custom Instructions</h3>
                                <button type="button" @click="props.handleModal"
                                    class="text-gray-400 bg-transparent hover:text-gray-200 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div class="p-6 space-y-6">
                                <p class="text-base leading-relaxed text-gray-200">Feature Coming Soon!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import ModalContainer from '../../../../modal/ModalContainer.vue';

const props = defineProps<{ handleModal: () => void }>();
const target = ref<any>(null);

onClickOutside(target, props.handleModal)
</script>
