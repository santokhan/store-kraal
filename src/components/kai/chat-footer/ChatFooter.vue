<template>
    <div class="h-auto w-full border-t xl:border-none border-white/20 mb-8">
        <div class="max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2" title="footer">
            <form @submit="handleSubmit" class="relative">
                <div
                    class="flex items-center gap-1 rounded-xl pl-2 lg:pl-4 pr-1 lg:pr-3 py-1 lg:py-3 shadow bg-chatgpt-400">
                    <div
                        class="w-6 h-6 rounded-full bg-chatgpt-700 grid place-items-center relative overflow-hidden  hover:text-gray-300">
                        <i class="fa fa-plus text-sm rounded-full bg-chatgpt-600 text-gray-300"></i>
                        <input type="file" name="" id="" class="absolute left-0 top-0 opacity-0 e z-[50]">
                    </div>
                    <div class="relative w-full h-full flex items-center ml-2">
                        <textarea rows="1" id="chatInput" @keyup="handleChange" @input="handleChange"
                            class="w-full focus:outline-none resize-none overflow-hidden bg-transparent text-white min-h-[32px] h-8 pt-1 text-sm tracking-wider font-normal"
                            :value="input" ref="textarea" placeholder="Send a message..."></textarea>
                        <div class="whitespace-pre-wrap break-words invisible absolute left-0 top-0 w-full" ref="hiddenDiv">
                            {{ input }} <br />
                        </div>
                    </div>
                    <div class="self-end">
                        <div class="flex items-center">
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
const props = defineProps<{ chatId: any }>()

const store = useSideBarStoreAzureStore()
const hiddenDiv: any = ref<null | HTMLElement>(null);
const input = ref<string>("");
const textarea: any = ref(null);
const loading = ref<boolean>(false)

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
