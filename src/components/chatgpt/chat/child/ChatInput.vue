<template>
  <form @submit="handleSubmit" class="relative">
    <div
      class="flex items-center gap-1 rounded-md pl-2 lg:pl-4 pr-1 lg:pr-3 py-1 lg:py-3 shadow bg-chatgpt-400"
    >
      <div class="relative w-full h-full flex items-center">
        <textarea
          rows="1"
          id="chatInput"
          placeholder="Send a message..."
          @keyup="handleChange"
          @input="handleChange"
          :class="'w-full focus:outline-none resize-none overflow-hidden bg-transparent text-white min-h-6 '"
          spellcheck="true"
          :value="input"
          ref="textarea"
        ></textarea>
        <div
          class="whitespace-pre-wrap break-words invisible absolute left-0 top-0 w-full"
          ref="hiddenDiv"
        >
          {{ input }} <br />
        </div>
      </div>

      <div class="self-end">
        <button
          class="w-auto p-1 rounded-md text-gray-100 hover:bg-white/10 disabled:opacity-40"
          :disabled="input ? false : true"
        >
          <Telegram class="h-4" />
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import ChatContainer from "./ChatContainer.vue";
import Telegram from "../../../icons/telegram.vue";
import { RouterLink } from "vue-router";

const props: any = defineProps({ handleList: Function });
const input: Ref<string> = ref("");
const hiddenDiv: any = ref(null);

function handleChange(e: any) {
  input.value = e.target.value;

  e.target.style.height = hiddenDiv.value.scrollHeight + "px";
}

const textarea: any = ref(null);
function handleSubmit(e: any) {
  e.preventDefault();
  props.handleList(input.value);

  input.value = "";
  textarea.value.style.height = "24px";
}
</script>
