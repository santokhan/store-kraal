<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50">
    <ChatContainer :robot="true">
      <ChatText>
        <TypeWriter :text="res2" :finishTyping="handleFinish" />
      </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import ChatText from "../child/ChatText.vue";
import TypeWriter from "./TypeWriter.vue";
import { Ref, ref } from "vue";
import { res2 } from "./chatResponse";
import ChatContainer from "../child/ChatContainer.vue";

const isFinish: Ref<boolean> = ref(false);
function handleFinish() {
  isFinish.value = true;
}

const isGenerate: Ref<boolean> = ref(false);
function handleReport() {
  isGenerate.value = false;
}
</script>
