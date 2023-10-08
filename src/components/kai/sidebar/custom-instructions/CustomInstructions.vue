<template>
    <Teleport to="body">
        <div class="fixed inset-0 bg-black/10 z-50 grid place-items-center p-5 overflow-y-auto" v-if="props.isOpenModal">
            <div ref="modal"
                class="relative row-auto w-full rounded-lg text-left shadow-xl transition-all bg-chatgpt-600 max-w-xl text-gray-200">
                <InstructionsForm v-if="formIsOpen" :handleCancel="() => {
                    props.handleModal()
                    handleFormIsOpen()
                }" />
                <Instructions v-else :handleFormIsOpen="handleFormIsOpen" />
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import Instructions from './Instructions.vue';
import InstructionsForm from './InstructionsForm.vue';
const props = defineProps<{ isOpenModal: boolean, handleModal: () => void }>();

// Create a ref and set it to null initially
const modal = ref<any>(null);
const formIsOpen = ref<boolean>(false);

onClickOutside(modal, () => {
    props.handleModal()
})

function handleFormIsOpen() {
    formIsOpen.value = !formIsOpen.value
}
</script>
