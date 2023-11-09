<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="relative row-auto w-full rounded-xl text-left shadow-xl transition-all bg-chatgpt-600 max-w-2xl text-gray-200">
                <div class="flex items-center justify-between px-6 py-4">
                    <button type="button" @click="isOpenControl = !isOpenControl" class="w-8 h-8 grid place-items-center"
                        :class="[isOpenControl ? 'text-gray-100' : 'text-gray-400 hover:text-gray-200']"><svg
                            class="w-8 h-8" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 8.75H3.75C3.06 8.75 2.5 8.19 2.5 7.5C2.5 6.81 3.06 6.25 3.75 6.25H20C20.69 6.25 21.25 6.81 21.25 7.5C21.25 8.19 20.69 8.75 20 8.75ZM27.5 15C27.5 14.31 26.94 13.75 26.25 13.75H3.75C3.06 13.75 2.5 14.31 2.5 15C2.5 15.69 3.06 16.25 3.75 16.25H26.25C26.94 16.25 27.5 15.69 27.5 15ZM16.25 22.5C16.25 21.81 15.69 21.25 15 21.25H3.75C3.06 21.25 2.5 21.81 2.5 22.5C2.5 23.19 3.06 23.75 3.75 23.75H15C15.69 23.75 16.25 23.19 16.25 22.5Z"
                                fill="currentColor" />
                        </svg>
                    </button>
                    <Control v-if="isOpenControl" />
                    <h3 class="text-xl font-semibold text-white"><!-- Server data -->Buddy</h3>
                    <button type="button" @click="props.handleModal"
                        class="text-gray-400 bg-transparent hover:text-gray-200 rounded-lg text-sm w-8 h-8 grid place-items-center border border-gray-400">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <div class="p-6 space-y-6">
                    <div class="grid place-items-center">
                        <VoiceInput />
                    </div>
                    <TextInput />
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue'
import VoiceInput from '../buddy/voice-input/VoiceInput.vue'

const props = defineProps<{ handleModal: () => void }>()
const modal = ref<any>(null)
const isOpenControl = ref<boolean>(true)
</script>

