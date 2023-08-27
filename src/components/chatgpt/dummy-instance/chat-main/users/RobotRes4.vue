<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50">
    <ChatContainer :robot="true">
      <Profile user="robot" />
      <ChatText>
        <TypeWriter
          :text="res4(props.inputText)"
          :finishTyping="handleFinish"
          :eleScrollTop="props.eleScrollTop"
        />
      </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import Profile from "./Profile.vue";
import TypeWriter from "./TypeWriter.vue";
import { Ref, ref } from "vue";
import { res4 } from "./chatResponse";
import ChatText from "../ChatText.vue";
import ChatContainer from "./ChatContainer.vue";
import { useFormDataStore } from "../../../../../stores/FormData";

const props = defineProps<{ eleScrollTop: () => void; inputText: string }>();

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
