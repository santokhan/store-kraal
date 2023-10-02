<template>
    <div class="flex flex-col justify-between items-center h-full gap-10 lg:mb-4">
        <div class="max-w-4xl mx-auto px-4 flex justify-center items-center mt-12">
            <h2 class="text-2xl lg:text-4xl font-semibold text-white text-center opacity-30">KraalAI</h2>
        </div>
        <div class="w-full max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2">
            <form @submit="handleSubmit">
                <div class="rounded-xl shadow bg-chatgpt-400">
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
                        <button type="submit" :disabled="!input" title="Send message"
                            class="w-8 h-8 flex justify-center items-center rounded-md text-gray-100 hover:bg-kraal-blue-500 disabled:opacity-40">
                            <Telegram class="h-4" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import Telegram from '../../../icons/telegram.vue';
import AttachmentPreview from './AttachmentPreview.vue';
import FileInputBox from './FileInputBox.vue';
import { useRoute } from 'vue-router';
import { useSideBarStoreAzureStore, useWelcomeChatStore } from '../../../../stores/sideBarStoreAzure';

const input = ref<string>("")
const fileInput = ref<any[]>([])
const route = useRoute()

const chatId = ref<number>()
function assignInstanceId() {
    if (typeof route.params.id === 'string' || typeof route.params.id === 'number') {
        chatId.value = parseInt(route.params.id)
    }
} assignInstanceId()
watch(() => route.params.id, assignInstanceId)

const store = useSideBarStoreAzureStore()
const chatStore = useWelcomeChatStore()

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

    // switch to original chat instance
    const chat = await store.create_chat_and_send_message()
    chatStore.sendChatMessage(chat.id, input.value)

    // TODO: clear input after form submit complete
    input.value = ""
    fileInput.value = []
}
</script>