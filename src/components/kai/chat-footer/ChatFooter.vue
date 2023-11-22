<template>
    <div class="h-auto w-full border-t xl:border-none border-white/20">
        <div class="max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2" title="footer">
            <form @submit="handleSubmit" class="relative">
                <div class="rounded-xl shadow bg-chatgpt-400 text-gray-300">
                    <div v-if="fileInput.length > 0" class="p-3">
                        <AttachPreview :files="fileInput" :removeFiles="removeFiles" />
                    </div>
                    <div class="grid grid-cols-[2rem_1fr_2rem] gap-2 items-end p-3">
                        <div
                            class="w-8 h-8 rounded-lg grid place-items-center relative overflow-hidden text-gray-300 hover:text-white">
                            <Attachment class="w-5" />
                            <FileInput :handleFile="handleFile" />
                        </div>
                        <div class="relative w-full h-full flex items-center">
                            <textarea rows="1" id="chatInput" @keyup="handleChange" @input="handleChange" :class="[
                                'w-full focus:outline-none resize-none overflow-hidden bg-transparent text-white min-h-[1.5rem] h-[1.5rem] text-sm tracking-wider font-light'
                            ]" :value="input" ref="textarea" placeholder="Send a message..."></textarea>
                            <div ref="hiddenDiv" :class="[
                                'whitespace-pre-wrap break-words invisible absolute left-0 top-0 w-full'
                            ]">{{ input }}</div>
                        </div>
                        <div class="flex justify-center items-end h-full relative">
                            <ChatSubmitBtn v-if="!loading" :disabled="!input" />
                            <Loading v-else class="absolute right-0" />
                        </div>
                    </div>
                </div>
            </form>
            <ChatFooterInfo />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useSideBarStoreAzureStore } from "../../../stores/sideBarStoreAzure";
import Loading from "../instances/chat-main/Loading.vue";
import ChatSubmitBtn from "../instances/chat-main/ChatSubmitBtn.vue";
import AttachPreview from "../instances/chat-main/AttachPreview.vue";
import Attachment from "../../icons/attachment.vue";
import FileInput from "../instances/chat-main/file-input/FileInput.vue";
import ChatFooterInfo from "../instances/chat-main/ChatFooterInfo.vue";

const props = defineProps<{ loading: boolean }>()
const emits = defineEmits(["onSend"]);

const store = useSideBarStoreAzureStore()
const hiddenDiv: any = ref<null | HTMLElement>(null);
const input = ref<string>("");
const textarea: any = ref(null);
const fileInput = ref<File[]>([])

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

function handleChange(e: any) {
    input.value = e.target.value.trim();
    e.target.style.height = `${hiddenDiv.value.scrollHeight}px`;
}

async function handleSubmit(e: any) {
    e.preventDefault();

    if (fileInput.value) {
        emits("onSend", input.value, fileInput.value);
    } else {
        emits("onSend", input.value);
    }

    // Clear <textarea> afer submit & set initial height
    input.value = "";
    fileInput.value = [];
    textarea.value.style.height = "24px";
}
</script>
