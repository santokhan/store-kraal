<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="relative row-auto w-full rounded-xl text-left shadow-xl transition-all bg-modal-raisin-black max-w-2xl text-gray-200 p-6 space-y-6">
                <div class="flex items-center justify-between text-center">
                    <div class="w-8"></div>
                    <div class="">
                        <ModalTitle>AI Studio</ModalTitle>
                        <ModalDesc>Craft new features</ModalDesc>
                    </div>
                    <CloseModal :handle-click="props.handleModal" />
                </div>
                <form class="space-y-3">
                    <div class="flex gap-3 items-center">
                        <div class="w-1/2 grid gap-2">
                            <label for="name" class="capitalize">Feature Name</label>
                            <input id="name" type="text" class="w-full bg-[#181A1C] p-3 rounded-lg focus:outline-none">
                        </div>
                        <div class="w-1/2 grid gap-2">
                            <label for="type" class="capitalize">Feature type</label>
                            <input id="type" type="text" class="w-full bg-[#181A1C] p-3 rounded-lg focus:outline-none">
                        </div>
                    </div>
                    <div class="flex gap-3 items-end">
                        <div class="w-full grid gap-2">
                            <label for="details" class="">Describe Feature in Detail</label>
                            <input type="text" name="" id="details"
                                class="w-full bg-[#181A1C] p-3 rounded-lg focus:outline-none">
                        </div>
                        <button type="button"
                            class="h-12 rounded-lg bg-kraal-purple-500 hover:bg-kraal-purple-500/80 text-gray-100 px-12">Submit</button>
                    </div>
                </form>
                <table class="table-auto text-sm overflow-auto">
                    <thead>
                        <tr>
                            <td class="border-none w-1/3 bg-chatgpt-400 p-2 rounded-l-lg">Review</td>
                            <td class="border-none w-2/3 bg-chatgpt-400 p-2 rounded-r-lg">Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="" v-for="(item, index) in connectionList" :key="index">
                            <td class="border-none p-2">{{ item.review }}</td>
                            <td class="border-none p-2 flex">
                                <p>{{ item.description }}</p>
                                <button type="button"
                                    class="min-w-[2.25rem] w-[2.25rem] h-[2.25rem] rounded-lg grid place-items-center text-kraal-purple-500 hover:text-kraal-purple-500/60">
                                    <svg class="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.3333 29H8C4.776 29 3 27.224 3 24V10.6667C3 7.44267 4.776 5.66667 8 5.66667H12C12.552 5.66667 13 6.11467 13 6.66667C13 7.21867 12.552 7.66667 12 7.66667H8C5.89733 7.66667 5 8.564 5 10.6667V24C5 26.1027 5.89733 27 8 27H21.3333C23.436 27 24.3333 26.1027 24.3333 24V20C24.3333 19.448 24.7813 19 25.3333 19C25.8853 19 26.3333 19.448 26.3333 20V24C26.3333 27.224 24.5573 29 21.3333 29ZM27.44 6.70667L25.2933 4.56002C24.5333 3.81335 23.32 3.81333 22.56 4.57333L20.76 6.38668L25.6134 11.24L27.4267 9.43998C28.1867 8.67999 28.1867 7.46667 27.44 6.70667ZM19.3467 7.80001L10.6667 16.52V21.3333H15.48L24.2 12.6533L19.3467 7.80001Z"
                                            fill="currentColor" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid place-items-center">
                    <button type="button" class="h-12 rounded-lg bg-[#3B3B3D] hover:bg-[#3B3B3D]/80 text-white px-12">Submit Final</button>
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CloseModal from '../../../../modal/CloseModal.vue';
import ModalContainer from '../../../../modal/ModalContainer.vue';
import { connectionList } from './aistudio'
import ModalTitle from './ModalTitle.vue';
import ModalDesc from './ModalDesc.vue';

const props = defineProps<{ handleModal: () => void }>()
const modal = ref<any>(null)
</script>

