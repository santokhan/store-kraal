<template>
  <!-- Do not use any parent div on instance -->
  <ChatMain :inputText="inputText" :class="props.hidden ? 'hidden' : ''" />
  <ChatFooter
    :handleSubmitedText="handleSubmitedText"
    :class="props.hidden ? 'hidden' : ''"
  />
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import ChatMain from "./chat-main/ChatMain.vue";
import ChatFooter from "../chat-footer/ChatFooter.vue";

const props = defineProps<{ hidden: boolean }>();

const inputText: Ref<string[]> = ref([]);
// Lifting state up form chat input
function handleSubmitedText(data: string) {
  inputText.value.push(data);
}
</script>
