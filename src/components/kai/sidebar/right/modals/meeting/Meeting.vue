<template>
    <Teleport to="body">
        <ModalContainer>
            <div ref="modal"
                class="relative row-auto w-full rounded-lg text-left shadow-xl transition-all bg-modal-raisin-black max-w-2xl text-gray-200">
                <div class="flex items-center justify-between px-6 py-4 border-b border-chatgpt-400 rounded-t">
                    <div class="w-8"></div>
                    <h3 class="text-xl font-semibold text-white">Meeting</h3>
                    <CloseModal :handle-click="props.handleModal" />
                </div>
                <div class="p-6 space-y-8">
                    <div class="flex text-gray-100 bg-modal-charcoal rounded-lg">
                        <TabButton :handleClick="open_attend" :active="tab === TABS[0]">Attend</TabButton>
                        <TabButton :handleClick="open_transcript" :active="tab === TABS[1]">Transcript</TabButton>
                    </div>
                    <Attend v-if="tab === TABS[0]" />
                    <Transcript v-else-if="tab === TABS[1]" />
                </div>
            </div>
        </ModalContainer>
    </Teleport>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import ModalContainer from '../../../../../modal/ModalContainer.vue';
import Attend from './Attend.vue';
import Transcript from './Transcript.vue';
import TabButton from './TabButton.vue';
import CloseModal from '../../../../../modal/CloseModal.vue';

const TABS = ["attend", "transcript"]

const tab = ref<string>('attend')
function open_attend() {
    tab.value = 'attend'
}
function open_transcript() {
    tab.value = 'transcript'
}

type Props = { handleModal: () => void }
const props = defineProps<Props>()
</script>
