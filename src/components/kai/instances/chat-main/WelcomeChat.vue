<template>
    <div class="flex flex-col justify-between items-center h-full ">
        <Branding />
        <form @submit="handleSubmit" enctype="multipart/form-data"
            class="w-full max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2">
            <div class="rounded-xl shadow bg-chatgpt-400" :class="animateChatBox && 'animate-chatbox'">
                <textarea :value="input" placeholder="Send a message..." @input="(e: any) => input = e.target.value"
                    ref="aiInput"
                    class="w-full focus:outline-none resize-none overflow-auto bg-transparent text-white min-h-56 h-56 px-4 py-3"></textarea>
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
import { onMounted, ref, watch } from 'vue';
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
const aiInput = ref<HTMLElement | null>(null);

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
    const msg = input.value
    if (!msg) {
        throw new Error("Can not read message")
    } else {
        const files = fileInput.value
        // clear on submit for Nuku, doesn't matter user getting response of not
        input.value = ""
        fileInput.value = []
        loading.value = true // start loading dots
        // switch to original chat instance

        const chatRes = await azureAPI.chat.createChat("New chat");

        let chatId = chatRes.id;
        if (!chatId) {
            throw new Error("Can not read chatId");
        } else {
            store.isInputLocked = true;
            
            store.sendNewChatMessage(chatId, msg, files);
            // TODO: clear input after form submit complete
            loading.value = true
            // input.value = "" // See on top
            fileInput.value = []
        }
    }
}

onMounted(() => {
    if (aiInput.value) {
        aiInput.value.focus();
    }
})
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