<template>
    <div class="flex flex-col justify-between items-center h-full gap-10 lg:mb-4">
        <Branding />
        <form @submit="handleSubmit" class="w-full max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2">
            <div class="rounded-xl shadow bg-chatgpt-400" :class="animateChatBox && 'animate-chatbox'">
                <div class="relative w-full h-full">
                    <textarea :value="input" placeholder="Send a message..." @input="(e: any) => input = e.target.value"
                        class="w-full focus:outline-none resize-none overflow-auto bg-transparent text-white min-h-56 h-56 px-4 py-3"></textarea>
                </div>
                <AttachmentPreview :files="fileInput" :handleFiles="(index) => { handleFiles(index) }" />
                <div class="p-2 flex justify-between items-center">
                    <FileInputBox>
                        <input type="file" multiple="true" @change="handleChange" title="Attachment"
                            class="opacity-0 absolute z-10 w-full h-full left-0 top-0">
                    </FileInputBox>
                    <Loading v-if="loading" />
                    <ChatSubmitBtn v-else :disabled="!input" />
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import AttachmentPreview from './AttachmentPreview.vue';
import FileInputBox from './FileInputBox.vue';
import { useRoute } from 'vue-router';
import { useSideBarStoreAzureStore } from '../../../../stores/sideBarStoreAzure';
import { storeToRefs } from 'pinia';
import Branding from './Branding.vue';
import ChatSubmitBtn from './ChatSubmitBtn.vue';
import Loading from './Loading.vue';

const input = ref<string>("")
const fileInput = ref<any[]>([])
const route = useRoute()
const loading = ref<boolean>(false)
const store = useSideBarStoreAzureStore()
const { animateChatBox } = storeToRefs(store)

const chatId = ref<number>()
function assignInstanceId() {
    if (typeof route.params.id === 'string' || typeof route.params.id === 'number') {
        chatId.value = parseInt(route.params.id)
    }
} assignInstanceId()
watch(() => route.params.id, assignInstanceId)

// User input file handling
function handleChange(e: any) {
    const files = e.target.files
    if (files['0']) {
        for (const key in files) {
            if (Object.prototype.hasOwnProperty.call(files, key)) {
                const ele = files[key];
                if (!ele) return;
                fileInput.value.push(ele);
            }
        }
    }
}
function handleFiles(index: number) {
    fileInput.value = fileInput.value.filter((e, i) => i !== index)
}
async function handleSubmit(e: any) {
    e.preventDefault()
    const formData = { message: input.value, files: fileInput.value.map(e => e) }
    if (input.value) {
        // clone current input
        const msg = input.value
        // clear on submit for Nuku, doesn't matter user getting response of not
        input.value = ""
        loading.value = true // start loading dots
        // switch to original chat instance
        // const chat = await store.create_chat()
        await store.sendNewChatMessage(msg)
        // TODO: clear input after form submit complete
        loading.value = false
        // input.value = ""
        fileInput.value = []
    }
}
</script>

<style scoped>
.animate-chatbox {
    animation-name: chatbox;
    animation-duration: 3000ms;
    animation-timing-function: ease-in;
}

@keyframes chatbox {
    0% {
        outline: 1px solid #9ca3af;
    }

    60% {
        outline: 1px solid #9ca3af;
    }

    90% {
        outline: 1px solid transparent;
    }

    100% {
        outline: 1px solid transparent;
    }
}
</style> 