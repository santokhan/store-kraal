<template>
    <div class="flex flex-col justify-between items-center h-full ">
        <Branding />
        <form @submit="handleSubmit" class="w-full max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2"
            enctype="multipart/form-data">
            <div class="rounded-xl shadow bg-chatgpt-400" :class="animateChatBox && 'animate-chatbox'">
                <div class="relative w-full h-full">
                    <textarea :value="input" placeholder="Send a message..." @input="(e: any) => input = e.target.value"
                        class="w-full focus:outline-none resize-none overflow-auto bg-transparent text-white min-h-56 h-56 px-4 py-3"></textarea>
                </div>
                <AttachmentPreview :files="fileInput" :removeFiles="(index) => { removeFiles(index) }" />
                <div class="p-2 flex justify-between items-center">
                    <FileInputBox>
                        <FileInput :handleFile="handleFile" />
                    </FileInputBox>
                    <Loading v-if="loading" />
                    <ChatSubmitBtn v-else :disabled="!input" />
                </div>
            </div>
        </form>
        <ChatFooterInfo />
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import AttachmentPreview from './AttachmentPreview.vue';
import FileInputBox from './FileInputBox.vue';
import FileInput from './file-input/FileInput.vue';
import { useRoute } from 'vue-router';
import { useSideBarStoreAzureStore } from '../../../../stores/sideBarStoreAzure';
import { storeToRefs } from 'pinia';
import Branding from './Branding.vue';
import ChatSubmitBtn from './ChatSubmitBtn.vue';
import Loading from './Loading.vue';
import ChatFooterInfo from './ChatFooterInfo.vue';
import azureAPI from '../../../../kraal-api/azureAPI';

const input = ref<string>("");
const fileInput = ref<File[]>([]);
const route = useRoute();
const loading = ref<boolean>(false);
const store = useSideBarStoreAzureStore();
const { animateChatBox } = storeToRefs(store);

const chatId = ref<number>()
function assignInstanceId() {
    if (typeof route.params.id === 'string' || typeof route.params.id === 'number') {
        chatId.value = parseInt(route.params.id)
    }
} assignInstanceId()
watch(() => route.params.id, assignInstanceId)

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
    fileInput.value.splice(index, 1)
}
async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = {
        message: input.value,
        files: fileInput.value.map((e: File) => e)
    }
    if (input.value) {
        // clone current input
        const msg = input.value
        const files = fileInput.value
        // clear on submit for Nuku, doesn't matter user getting response of not
        input.value = ""
        fileInput.value = []
        loading.value = true // start loading dots
        // switch to original chat instance
        
        const chatRes = await azureAPI.chat.createChat("New chat");
        let chatId: number | null = null;
        if (!chatRes) {
            return;
        }
        chatId = chatRes.id;
        store.isInputLocked = true;
        store.sendChatMessage(chatId!, msg);
        // TODO: clear input after form submit complete
        loading.value = true
        // input.value = "" // See on top
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