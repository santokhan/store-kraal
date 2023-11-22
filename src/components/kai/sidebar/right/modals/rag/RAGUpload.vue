<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="rounded-xl shadow-xl transition-all bg-modal-raisin-black max-w-2xl text-gray-200 p-6 space-y-6">
                <div class="flex items-start justify-between">
                    <div class="w-8"></div>
                    <div class="text-center">
                        <ModalTitle>RAG</ModalTitle>
                        <ModalDesc>Upload new knowledge</ModalDesc>
                    </div>
                    <CloseModal :handle-click="props.handleModal" />
                </div>
                <div class="grid sm:grid-cols-2 gap-3">
                    <p class="text-[#8A96BC] text-sm text-center" v-for="(e, i) in infoList" :key="i">{{ e }}</p>
                </div>
                <textarea rows="4" name="description" placeholder="Add short description of file content"
                    class="w-full bg-[#181A1C] rounded-xl px-3 py-2 placeholder:text-gray-500 text-sm focus:outline-none"
                    spellcheck="false"></textarea>
                <div class="w-full bg-[#343541] rounded-xl relative grid place-items-center">
                    <div class="py-4 grid place-items-center gap-2 text-gray-400">
                        <svg class="w-20 h-20" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="57.5" cy="57.5" r="56.5" stroke="currentColor" stroke-width="2"
                                stroke-dasharray="12 12" />
                            <path
                                d="M57.7188 46.125V42.4688L65.0312 49.7812H61.375C58.8075 49.7812 57.7188 48.6925 57.7188 46.125ZM57.7025 69.85C57.8 70.175 57.5724 70.5 57.2474 70.5H46.75C43.5 70.5 41.875 68.875 41.875 65.625V46.125C41.875 42.875 43.5 41.25 46.75 41.25H55.2812V46.125C55.2812 50.0575 57.4425 52.2188 61.375 52.2188H66.25V57.8412C66.25 58.1012 66.0387 58.3125 65.7787 58.3288C61.0824 58.5725 57.3125 62.4887 57.3125 67.25C57.3125 68.16 57.4425 69.0375 57.7025 69.85ZM49.5938 62.375C49.5938 61.7022 49.0478 61.1562 48.375 61.1562C47.7022 61.1562 47.1562 61.7022 47.1562 62.375C47.1562 63.0478 47.7022 63.5938 48.375 63.5938C49.0478 63.5938 49.5938 63.0478 49.5938 62.375ZM49.5938 55.875C49.5938 55.2022 49.0478 54.6562 48.375 54.6562C47.7022 54.6562 47.1562 55.2022 47.1562 55.875C47.1562 56.5478 47.7022 57.0938 48.375 57.0938C49.0478 57.0938 49.5938 56.5478 49.5938 55.875ZM56.0938 62.375C56.0938 61.7022 55.5478 61.1562 54.875 61.1562H52.4375C51.7647 61.1562 51.2188 61.7022 51.2188 62.375C51.2188 63.0478 51.7647 63.5938 52.4375 63.5938H54.875C55.5478 63.5938 56.0938 63.0478 56.0938 62.375ZM59.75 57.0938C60.4228 57.0938 60.9688 56.5478 60.9688 55.875C60.9688 55.2022 60.4228 54.6562 59.75 54.6562H52.4375C51.7647 54.6562 51.2188 55.2022 51.2188 55.875C51.2188 56.5478 51.7647 57.0938 52.4375 57.0938H59.75ZM72.75 67.25C72.75 70.8396 69.8396 73.75 66.25 73.75C62.6604 73.75 59.75 70.8396 59.75 67.25C59.75 63.6604 62.6604 60.75 66.25 60.75C69.8396 60.75 72.75 63.6604 72.75 67.25ZM69.0938 67.25C69.0938 66.8015 68.7297 66.4375 68.2812 66.4375H67.0625V65.2188C67.0625 64.7703 66.6985 64.4062 66.25 64.4062C65.8015 64.4062 65.4375 64.7703 65.4375 65.2188V66.4375H64.2188C63.7703 66.4375 63.4062 66.8015 63.4062 67.25C63.4062 67.6985 63.7703 68.0625 64.2188 68.0625H65.4375V69.2812C65.4375 69.7297 65.8015 70.0938 66.25 70.0938C66.6985 70.0938 67.0625 69.7297 67.0625 69.2812V68.0625H68.2812C68.7297 68.0625 69.0938 67.6985 69.0938 67.25Z"
                                fill="currentColor" />
                        </svg>
                        <p class="text-center text-base text-gray-400 tracking-widest">Upload Document</p>
                    </div>
                    <input type="file" name="" id="" class="absolute inset-0 opacity-0">
                </div>
                <div class="grid sm:grid-cols-2 gap-3">
                    <div class="space-y-1" v-for="(item, index) in fileList" :key="index">
                        <div class="grid grid-cols-[3rem_auto_3rem] place-items-center gap-3 p-2 bg-[#343541] rounded-xl">
                            <div class="w-11 h-11 bg-kraal-purple-500 rounded-lg grid place-items-center">
                                <svg class="w-6 h-6 text-white" viewBox="0 0 24 29" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.5612 3.66666H18.9255V1.66666C18.9255 1.11466 18.4775 0.666664 17.9255 0.666664C17.3735 0.666664 16.9255 1.11466 16.9255 1.66666V3.66666H13V1.66666C13 1.11466 12.552 0.666664 12 0.666664C11.448 0.666664 11 1.11466 11 1.66666V3.66666H7.07454V1.66666C7.07454 1.11466 6.62654 0.666664 6.07454 0.666664C5.52254 0.666664 5.07454 1.11466 5.07454 1.66666V3.66666H4.4388C1.48014 3.66666 0 5.14532 0 8.10132V23.8987C0 26.8547 1.4788 28.3333 4.4388 28.3333H19.5628C22.5215 28.3333 24.0013 26.8547 24.0013 23.8987V8.10132C24 5.14532 22.5212 3.66666 19.5612 3.66666ZM13.3333 20H6.66667C6.11467 20 5.66667 19.552 5.66667 19C5.66667 18.448 6.11467 18 6.66667 18H13.3333C13.8853 18 14.3333 18.448 14.3333 19C14.3333 19.552 13.8853 20 13.3333 20ZM17.3333 14.6667H6.66667C6.11467 14.6667 5.66667 14.2187 5.66667 13.6667C5.66667 13.1147 6.11467 12.6667 6.66667 12.6667H17.3333C17.8853 12.6667 18.3333 13.1147 18.3333 13.6667C18.3333 14.2187 17.8853 14.6667 17.3333 14.6667Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                            <div class="w-full">
                                <h5 class="text-white text-sm font-medium">{{ item.file.name }}</h5>
                                <p class="text-xs text-gray-400">{{ item.file.createdAt.toDateString() }}</p>
                            </div>
                            <div class="w-11 h-11 rounded-lg grid place-items-center">
                                <svg class="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.3333 29H8C4.776 29 3 27.224 3 24V10.6667C3 7.44267 4.776 5.66667 8 5.66667H11C12.552 5.66667 13 6.11467 13 6.66667C13 7.21867 12.552 7.66667 12 7.66667H8C5.89733 7.66667 5 8.564 5 10.6667V24C5 26.1027 5.89733 27 8 27H21.3333C23.436 27 24.3333 26.1027 24.3333 24V20C24.3333 19.448 24.7813 19 25.3333 19C25.8853 19 26.3333 19.448 26.3333 20V24C26.3333 27.224 24.5573 29 21.3333 29ZM27.44 6.70667L25.2933 4.56002C24.5333 3.81335 23.32 3.81333 22.56 4.57333L20.76 6.38668L25.6134 11.24L27.4267 9.43998C28.1867 8.67999 28.1867 7.46667 27.44 6.70667ZM19.3467 7.80001L10.6667 16.52V21.3333H15.48L24.2 12.6533L19.3467 7.80001Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-500 text-xs">{{ item.description }}</p>
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 gap-3">
                    <button type="button"
                        class="h-12 rounded-lg bg-kraal-purple-500 text-gray-100 px-12 flex justify-center items-center gap-2">
                        <div class="w-5 h-5 grid place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        Add more
                    </button>
                    <button type="button" class="h-12 rounded-lg bg-kraal-purple-500 text-gray-100 px-12">Submit</button>
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue'
import CloseModal from '../../../../../modal/CloseModal.vue';
import ModalDesc from '../ModalDesc.vue';
import ModalTitle from '../ModalTitle.vue';

const props = defineProps<{ handleModal: () => void }>()
const modal = ref<any>(null)

const infoList = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
]

type FileData = {
    file: {
        name: string,
        createdAt: Date
    },
    description: string
}

const fileList: Array<FileData> = [
    {
        file: {
            name: "TextFile.txt",
            createdAt: new Date()
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
        file: {
            name: "TextFile.txt",
            createdAt: new Date()
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
    {
        file: {
            name: "TextFile.txt",
            createdAt: new Date()
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    },
]
</script>

