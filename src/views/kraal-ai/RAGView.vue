<template>
    <FixedContainer class="bg-[#343541] text-gray-100 flex flex-col">
        <header class="px-4 py-2 border-b border-gray-600">
            <div class="flex justify-between items-center">
                <div class="w-full">
                    <BackButton />
                </div>
                <div>
                    <h5 class="font-medium">RAG</h5>
                </div>
                <div class="w-full flex items-center justify-end">
                    <button type="button"
                        class="text-white bg-kraal-purple-500 hover:bg-kraal-purple-500/80 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">Submit</button>
                </div>
            </div>
        </header>
        <main class="grid lg:grid-cols-2 h-full">
            <div :class="['w-full px-4 lg:px-6 py-10', 'text-gray-200 flex justify-center']">
                <div class="w-full max-w-screen-sm space-y-6">
                    <div class="w-full border border-gray-600 rounded-xl shadows">
                        <button type="button" class="w-full bg-[#343541] rounded-xl relative grid place-items-center">
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
                            <input @change="handleInput" type="file" name="attachment" id="attachment"
                                class="absolute inset-0 opacity-0">
                        </button>
                        <AttachmentPreview v-if="fileInput" :files="fileInput"
                            :removeFiles="(index) => { removeFiles(index) }" class="mb-2" />
                        <div class="flex justify-between items-center border-t border-gray-600 py-1">
                            <button type="button" :class="['px-4 py-2 hover:text-white relative']">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                </svg>
                                <input @change="handleInput" type="file" name="attachment" id="attachment"
                                    class="absolute inset-0 opacity-0">
                            </button>
                            <button type="button" :class="['px-4 py-2 hover:text-white', 'flex items-center gap-1']">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                <span class="text-sm">Tag files to continue</span>
                            </button>
                            <button type="button" :class="['px-4 py-2 hover:text-white']">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- <div class="grid sm:grid-cols-2 gap-3">
                        <div class="space-y-1" v-for="(item, index) in fileList" :key="index">
                            <div
                                class="grid grid-cols-[3rem_auto_3rem] place-items-center gap-3 py-2 bg-[#343541] rounded-xl">
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
                    </div> -->
                    <!-- <div class="grid sm:grid-cols-2 gap-3">
                        <button type="button"
                            class="h-12 rounded-lg bg-kraal-purple-500 text-gray-100 px-12 flex justify-center items-center gap-2">
                            <div class="w-5 h-5 grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </path>
                                </svg>
                            </div>
                            Add more
                        </button>
                        <button type="button"
                            class="h-12 rounded-lg bg-kraal-purple-500 text-gray-100 px-12">Submit</button>
                    </div> -->
                </div>
            </div>
            <div :class="['px-4 lg:px-6 py-10', 'flex flex-col items-center', 'border-l border-gray-600']">
                <div class="w-full max-w-screen-sm rounded-xl border border-gray-600 px-1">
                    <div class="flex gap-1 items-center pl-2.5">
                        <!-- <button type="button" :class="['h-10 w-10 hover:text-white grid place-items-center relative']">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                            <FileInput :handleFile="handleFile" />
                        </button> -->
                        <!-- <textarea rows="1" name="description" placeholder="Message GPT" v-model="message"
                            class="w-full bg-transparent py-2 placeholder:text-gray-500 text-sm focus:outline-none"
                            spellcheck="false"></textarea> -->
                        <input type="search" name="description" placeholder="Search GPT" v-model="message"
                            class="w-full bg-transparent py-3 placeholder:text-gray-500 text-sm focus:outline-none"
                            spellcheck="false">
                        <div class="h-10 w-10 grid place-items-center">
                            <button type="button"
                                :class="[
                                    'h-8 w-8 text-gray-100 rounded-lg grid place-items-center hover:text-kraal-purple-500']">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </FixedContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FixedContainer from '../../components/shared/container/FixedContainer.vue';
import BackButton from './BackButton.vue';
import AttachmentPreview from '../../components/kai/instances/chat-main/AttachmentPreview.vue';
import FileInput from '../../components/kai/instances/chat-main/file-input/FileInput.vue';

const message = ref<string>();
const fileInput = ref<File[]>([]);

function handleFile(files: FileList) {
    const len = files.length;
    if (len) {
        for (let i = 0; i < len; i++) {
            const file = files[i];
            fileInput.value.push(file)
        }
    }
}

function removeFiles(index: number) {
    fileInput.value.splice(index, 1);
}

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

function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files) {
        handleFile(files);
    }
}
</script>

