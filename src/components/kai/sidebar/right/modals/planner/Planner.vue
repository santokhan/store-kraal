<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="relative row-auto w-full rounded-xl text-left shadow-xl transition-all bg-modal-raisin-black max-w-2xl text-gray-200 p-6 space-y-6">
                <div class="flex items-center justify-between">
                    <div class="w-8"></div>
                    <h3 class="text-xl font-semibold text-white">Planner</h3>
                    <CloseModal :handle-click="props.handleModal" />
                </div>
                <div class="space-y-4">
                    <div class="grid sm:grid-cols-2 gap-4 text-gray-400 text-sm">
                        <h4 v-for="(item, index) in planDescList" :key="index"
                            class="px-4 py-2 border border-[#343541] rounded-xl text-[#8A96BC]">
                            {{ item.description }}
                        </h4>
                    </div>
                </div>
                <div class="">
                    <textarea rows="4" name="description" placeholder="Add short description of file content"
                        class="w-full bg-[#181A1C] rounded-xl px-3 py-2 placeholder:text-gray-500 text-sm focus:outline-none"
                        spellcheck="false"></textarea>
                </div>
                <div class="grid place-items-center">
                    <button type="button" class="h-12 rounded-lg bg-kraal-purple-500 text-gray-100 px-12">Generate</button>
                </div>

                <div class="bg-chatgpt-400 rounded-xl overflow-hidden">
                    <div class="flex justify-between items-center text-gray-800 bg-black px-4 py-2">
                        <div class="p-1">
                            <h4 class="text-[#8A96BC]">Result</h4>
                        </div>
                        <div class="flex gap-3 items-center"><a
                                class="w-9 h-9 rounded-full border border-white/50 grid place-items-center text-gray-100 bg-chatgpt-600 hover:bg-chatgpt-500 focus:bg-kraal-purple-500"
                                href="#">
                                <svg class="w-4 h-4" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3125 17.125H7.02083C5.20667 17.125 4.20833 16.1267 4.20833 14.3125V7.02083C4.20833 5.20667 5.20667 4.20833 7.02083 4.20833H14.3125C16.1267 4.20833 17.125 5.20667 17.125 7.02083V14.3125C17.125 16.1267 16.1267 17.125 14.3125 17.125ZM7.02083 5.45833C5.91083 5.45833 5.45833 5.91083 5.45833 7.02083V14.3125C5.45833 15.4225 5.91083 15.875 7.02083 15.875H14.3125C15.4225 15.875 15.875 15.4225 15.875 14.3125V7.02083C15.875 5.91083 15.4225 5.45833 14.3125 5.45833H7.02083ZM2.125 11.5V3.6875C2.125 2.5775 2.5775 2.125 3.6875 2.125H11.5C11.845 2.125 12.125 1.845 12.125 1.5C12.125 1.155 11.845 0.875 11.5 0.875H3.6875C1.87333 0.875 0.875 1.87333 0.875 3.6875V11.5C0.875 11.845 1.155 12.125 1.5 12.125C1.845 12.125 2.125 11.845 2.125 11.5Z"
                                        fill="currentColor" />
                                </svg>
                            </a>
                            <a class="w-9 h-9 rounded-full border border-white/50 grid place-items-center text-gray-100 bg-chatgpt-600 hover:bg-chatgpt-500 focus:bg-kraal-purple-500"
                                href="#">
                                <svg class="w-4 h-4" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.4583 11.5V14C15.4583 16.015 14.3483 17.125 12.3333 17.125H4C1.985 17.125 0.875 16.015 0.875 14V5.66667C0.875 3.65167 1.985 2.54167 4 2.54167H6.5C6.845 2.54167 7.125 2.82167 7.125 3.16667C7.125 3.51167 6.845 3.79167 6.5 3.79167H4C2.68583 3.79167 2.125 4.3525 2.125 5.66667V14C2.125 15.3142 2.68583 15.875 4 15.875H12.3333C13.6475 15.875 14.2083 15.3142 14.2083 14V11.5C14.2083 11.155 14.4883 10.875 14.8333 10.875C15.1783 10.875 15.4583 11.155 15.4583 11.5ZM17.125 4.04667C17.1242 4.53583 16.9333 4.995 16.5867 5.34L9.11749 12.7758C8.99999 12.8925 8.84167 12.9583 8.67667 12.9583H5.66667C5.32167 12.9583 5.04167 12.6783 5.04167 12.3333V9.32417C5.04167 9.15917 5.10666 8.99999 5.22416 8.88332L12.66 1.41333C13.0042 1.06666 13.4641 0.875833 13.9533 0.875C13.9541 0.875 13.955 0.875 13.9559 0.875C14.4442 0.875 14.9034 1.065 15.2492 1.41084L16.59 2.75168C16.935 3.09751 17.1258 3.5575 17.125 4.04667ZM13.6808 6.46918L11.5308 4.31916L6.29167 9.5825V11.7092H8.41834L13.6808 6.46918ZM15.875 4.04499C15.875 3.88999 15.815 3.74418 15.7058 3.63501L14.365 2.29417C14.2558 2.185 14.11 2.125 13.9559 2.125H13.955C13.8 2.125 13.655 2.18584 13.5458 2.29501L12.4133 3.4325L14.5675 5.58666L15.705 4.45418C15.8142 4.34584 15.8742 4.19999 15.875 4.04499Z"
                                        fill="currentColor" />
                                </svg>
                            </a>
                            <a class="w-9 h-9 rounded-full border border-white/50 grid place-items-center text-gray-100 bg-chatgpt-600 hover:bg-chatgpt-500 focus:bg-kraal-purple-500"
                                href="#">
                                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.05831 11.275C6.81414 11.0309 6.81414 10.635 7.05831 10.3908C7.30248 10.1467 7.69834 10.1467 7.9425 10.3908L9.37581 11.8242V2.5C9.37581 2.155 9.65581 1.875 10.0008 1.875C10.3458 1.875 10.6258 2.155 10.6258 2.5V11.8242L12.0591 10.3908C12.3033 10.1467 12.6992 10.1467 12.9433 10.3908C13.1875 10.635 13.1875 11.0309 12.9433 11.275L10.4433 13.775C10.3858 13.8325 10.3167 13.8783 10.2401 13.91C10.1634 13.9417 10.0825 13.9583 10.0008 13.9583C9.91915 13.9583 9.83843 13.9417 9.76176 13.91C9.68509 13.8783 9.61581 13.8325 9.55831 13.775L7.05831 11.275ZM15 7.70833C14.655 7.70833 14.375 7.98833 14.375 8.33333C14.375 8.67833 14.655 8.95833 15 8.95833C16.3142 8.95833 16.875 9.51917 16.875 10.8333V15C16.875 16.3142 16.3142 16.875 15 16.875H5C3.68583 16.875 3.125 16.3142 3.125 15V10.8333C3.125 9.51917 3.68583 8.95833 5 8.95833C5.345 8.95833 5.625 8.67833 5.625 8.33333C5.625 7.98833 5.345 7.70833 5 7.70833C2.985 7.70833 1.875 8.81833 1.875 10.8333V15C1.875 17.015 2.985 18.125 5 18.125H15C17.015 18.125 18.125 17.015 18.125 15V10.8333C18.125 8.81833 17.015 7.70833 15 7.70833Z"
                                        fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <ul class="list-disc list-inner space-y-2 text-gray-400 text-xs p-4">
                        <li v-for="(item, index) in resultList" :key="index"
                            class="py-1 w-full flex items-center gap-2 text-[#8A96BC]">
                            {{ item.description }}
                        </li>
                    </ul>
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue'
import CloseModal from '../../../../../modal/CloseModal.vue';
import { resultList, planDescList } from './planner'

const props = defineProps<{ handleModal: () => void }>()
const modal = ref<any>(null)
</script>

