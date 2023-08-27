<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50">
    <ChatContainer :robot="true">
      <Profile>🤖</Profile>
      <ChatText>
        <TypeWriter :text="res2" :finishTyping="handleFinish" />
      </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import Profile from "./Profile.vue";
import TypeWriter from "./TypeWriter.vue";
import { Ref, ref } from "vue";
import { res2 } from "./chatResponse";
import ChatText from "../ChatText.vue";
import { useFormDataStore } from "../../../../../stores/FormData";

const isFinish: Ref<boolean> = ref(false);
function handleFinish() {
  isFinish.value = true;
}

const isGenerate: Ref<boolean> = ref(false);
function handleReport() {
  isGenerate.value = false;
}

const formData: any = useFormDataStore();
</script>
