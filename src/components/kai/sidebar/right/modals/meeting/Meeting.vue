<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="relative row-auto w-full rounded-lg text-left shadow-xl transition-all bg-chatgpt-600 max-w-2xl text-gray-200">
                <div class="flex items-center justify-between px-6 py-4 border-b border-chatgpt-400 rounded-t">
                    <div class=""></div>
                    <h3 class="text-xl font-semibold text-white">Meeting</h3>
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
                    <div class="flex text-gray-100 bg-chatgpt-500 rounded-lg">
                        <button type="button"
                            class="grid place-items-center h-12 w-full bg-indigo-500 text-gray-100 rounded-lg">Attend</button>
                        <button type="button" class="grid place-items-center h-12 w-full">Transcript</button>
                    </div>
                    <div class="flex items-center justify-between text-gray-100 rounded">
                        <button type="button" class="grid place-items-center h-12 text-indigo-500"><i
                                class="fa fa-arrow-left"></i></button>
                        <div class="">October 2023</div>
                        <button type="button" class="grid place-items-center h-12 text-indigo-500"><i
                                class="fa fa-arrow-right"></i></button>
                    </div>
                    <ul class="space-y-3">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </ul>
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue'
import Item from './list/Item.vue'

const props = defineProps<{ handleModal: () => void }>()
</script>

<style scoped></style>