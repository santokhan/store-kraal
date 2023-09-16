<template>
    <div class="h-auto w-full border-t xl:border-none border-white/20 mb-4">
        <div class="max-w-4xl mx-auto mt-auto bg-chatgpt-500 px-4 pt-2" title="footer">
            <form @submit="handleSubmit" class="relative">
                <div
                    class="flex items-center gap-1 rounded-xl pl-2 lg:pl-4 pr-1 lg:pr-3 py-1 lg:py-3 shadow bg-chatgpt-400">
                    <div class="relative w-full h-full flex items-center">
                        <textarea rows="1" id="chatInput" @keyup="handleChange" @input="handleChange"
                            class="w-full focus:outline-none resize-none overflow-hidden bg-transparent text-white min-h-[32px] h-8 pt-1"
                            :value="input" ref="textarea" placeholder="Send a message..."></textarea>
                        <div class="whitespace-pre-wrap break-words invisible absolute left-0 top-0 w-full" ref="hiddenDiv">
                            {{ input }} <br />
                        </div>
                    </div>
                    <div class="self-end">
                        <button type="submit" :disabled="!input"
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
import { ref, watchEffect } from "vue";
import Telegram from "../../icons/telegram.vue";
import { useChatSideBarStore } from "../../../stores/chatSideBar";
import Attachment from "../../icons/attachment.vue";

const store = useChatSideBarStore()
const hiddenDiv: any = ref<null | HTMLElement>(null);
const input = ref<string>("");
const input2 = ref<string>("");
const textarea: any = ref(null);

function handleChange(e: any) {
    input.value = e.target.value.trim();
    e.target.style.height = `${hiddenDiv.value.scrollHeight}px`;
}

function handleSubmit(e: any) {
    e.preventDefault();
    store.updateChatList(input.value)

    // Clear <textarea> afer submit & set initial height
    input.value = "";
    textarea.value.style.height = "24px";
}

watchEffect(() => {
    // Will make <textarea> empty on switch or delete instance 
    if (store.getActiveNavIndex()) {
        input.value = ""
    }
})
</script>
