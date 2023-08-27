<template>
  <form @submit="handleSubmit" class="relative">
    <div class="flex items-center gap-1 rounded-xl pl-2 lg:pl-4 pr-1 lg:pr-3 py-1 lg:py-3 shadow bg-chatgpt-400">
      <div class="relative w-full h-full flex items-center">
        <textarea rows="1" id="chatInput" placeholder="Send a message..." @keyup="handleChange" @input="handleChange"
          class="w-full focus:outline-none resize-none overflow-hidden bg-transparent text-white min-h-[32px] h-8 pt-1 "
          spellcheck="true" :value="input" ref="textarea"></textarea>
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
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Telegram from "../../../icons/telegram.vue";
import useChatInstanceStore from "../../../../stores/chatInstance";

const instanceStore = useChatInstanceStore()
const hiddenDiv: any = ref<null | HTMLElement>(null);
const input = ref<string>("");
const textarea: any = ref(null);

function handleChange(e: any) {
  input.value = e.target.value;
  e.target.style.height = `${hiddenDiv.value.scrollHeight}px`;
}

function handleSubmit(e: any) {
  e.preventDefault();
  instanceStore.handleSubmitedText(input.value);

  // Clear <textarea> afer submit and set initial height
  input.value = "";
  textarea.value.style.height = "24px";
}
</script>
