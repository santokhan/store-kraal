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
                <div class="p-6 space-y-8">
                    <div class="flex text-gray-100 bg-chatgpt-500 rounded-lg">
                        <TabButton :handleClick="open_attend" :active="tab === 'attend'">Attend</TabButton>
                        <TabButton :handleClick="open_transcript" :active="tab === 'transcript'">Transcript</TabButton>
                    </div>
                    <Tab1  v-if="tab === 'attend'"/>
                    <Tab2  v-else-if="tab === 'transcript'"/>
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue'
import Tab1 from './tab-1/Tab1.vue'
import Tab2 from './tab-2/Tab2.vue'
import TabButton from './TabButton.vue';

const tab = ref<string>('attend')
function open_attend() {
    tab.value = 'attend'
}
function open_transcript() {
    tab.value = 'transcript'
}

const props = defineProps<{ handleModal: () => void }>()
</script>

<style scoped></style>