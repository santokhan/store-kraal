<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="relative row-auto w-full rounded-xl text-left shadow-xl transition-all bg-chatgpt-600 max-w-2xl text-gray-200 p-6 space-y-6">
                <div class="flex items-center justify-between">
                    <div class="w-8"></div>
                    <div class="">
                        <h3 class="text-xl font-semibold text-white">RAG</h3>
                        <p class="text-gray-400 text-sm">Desc</p>
                    </div>
                    <CloseModal :handle-click="props.handleModal"/>
                </div>
                <form class="space-y-3">
                    <div class="flex gap-3 items-center">
                        <div class="w-1/2 grid gap-1">
                            <label>Feature Name</label>
                            <input type="text" class="bg-chatgpt-500 p-3 rounded-lg border border-gray-400 w-full">
                        </div>
                        <div class="w-1/2 grid gap-1">
                            <label>Feature Name</label>
                            <input type="text" class="bg-chatgpt-500 p-3 rounded-lg border border-gray-400 w-full">
                        </div>
                    </div>
                    <div class="flex gap-3 items-end">
                        <div class="w-full grid gap-1">
                            <label>Describe Feature in Detail</label>
                            <input type="text" name="" id=""
                                class="bg-chatgpt-500 p-3 rounded-lg border border-gray-400 w-full">
                        </div>
                        <button type="button" class="h-12 rounded-lg bg-kraal-purple-500 text-gray-100 px-12">Submit</button>
                    </div>
                </form>

                <table class="table-auto text-sm">
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
                                    class="min-w-[2.25rem] w-[2.25rem] h-[2.25rem] rounded-lg grid place-items-center text-kraal-purple-500">
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
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue'
import CloseModal from '../../../../../modal/CloseModal.vue';

const props = defineProps<{ handleModal: () => void }>()
const modal = ref<any>(null)

const connectionList = [
    {
        review: "Item Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        review: "Item Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        review: "Item Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]
</script>

