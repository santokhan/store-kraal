<template>
    <div class="h-auto w-full border-t xl:border-none border-white/20 mb-8">
        <div class="max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2" title="footer">
            <form @submit="handleSubmit" class="relative">
                <div :class="['rounded-xl shadow bg-chatgpt-400 text-gray-300']">
                    <div v-if="fileInput.length > 0" class="p-3">
                        <AttachPreview :files="fileInput" :handleFiles="handleFiles" />
                    </div>
                    <div class="grid grid-cols-[2rem_1fr_2rem] gap-2 items-end p-3">
                        <div
                            class="w-8 h-8 rounded-lg grid place-items-center relative overflow-hidden text-gray-300 hover:text-white" title="attachment">
                            <!-- <i class="fa fa-plus text-sm rounded-full"></i> -->
                            <Attachment class="w-5" />
                            <input type="file" name="" id="" class="absolute left-0 top-0 opacity-0 e z-[50]"
                                @change="handleFileChange">
                        </div>
                        <div class="relative w-full h-full flex items-center">
                            <textarea rows="1" id="chatInput" @keyup="handleChange" @input="handleChange" :class="[
                                'w-full focus:outline-none resize-none overflow-hidden bg-transparent text-white min-h-[1.5rem] h-[1.5rem] text-sm tracking-wider font-light'
                            ]" :value="input" ref="textarea" placeholder="Send a message..."></textarea>
                            <div ref="hiddenDiv" :class="[
                                'whitespace-pre-wrap break-words invisible absolute left-0 top-0 w-full'
                            ]">{{ input }}</div>
                        </div>
                        <div class="flex justify-center items-end h-full">
                            <ChatSubmitBtn v-if="!loading" :disabled="!input" />
                            <Loading v-else />
                        </div>
                    </div>
                </div>
            </form>
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

const props = defineProps<{ chatId: any }>()
const store = useSideBarStoreAzureStore()
const hiddenDiv: any = ref<null | HTMLElement>(null);
const input = ref<string>("");
const textarea: any = ref(null);
const loading = ref<boolean>(false)
const fileInput = ref<any[]>([])
// User input file handling
function handleFileChange(e: any) {
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

function handleChange(e: any) {
    input.value = e.target.value.trim();
    e.target.style.height = `${hiddenDiv.value.scrollHeight}px`;
}

async function handleSubmit(e: any) {
    e.preventDefault();

    if (typeof props.chatId !== "number") return;
    loading.value = true
    await store.sendChatMessage(props.chatId, input.value)
    loading.value = false

    // Clear <textarea> afer submit & set initial height
    input.value = "";
    textarea.value.style.height = "24px";
}
</script>
