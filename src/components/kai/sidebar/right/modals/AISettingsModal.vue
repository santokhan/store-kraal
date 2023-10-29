<template>
    <Teleport to="body">
        <ModalContainer v-if="props.isOpen">
            <div ref="modal"
                class="relative row-auto w-full rounded-lg text-left shadow-xl transition-all bg-chatgpt-600 max-w-2xl text-gray-200">
                <InstructionsForm v-if="formIsOpen" :handleCancel="() => {
                    props.handleModal()
                    handleFormIsOpen()
                }" />
                <Instructions v-else :handleFormIsOpen="handleFormIsOpen" :handleModal="props.handleModal" />
            </div>
        </ModalContainer>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import Instructions from './ai-settings/Instructions.vue';
import InstructionsForm from './ai-settings/InstructionsForm.vue';
import ModalContainer from '../../../../modal/ModalContainer.vue';

const props = defineProps<{ isOpen: boolean, handleModal: () => void }>();
const modal = ref<any>(null);
const formIsOpen = ref<boolean>(false);

onClickOutside(modal, props.handleModal)

function handleFormIsOpen() { formIsOpen.value = !formIsOpen.value; }
</script>
