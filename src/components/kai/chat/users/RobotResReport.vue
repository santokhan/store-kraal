<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50">
    <ChatContainer :robot="true">
      <Profile user="robot" />
      <ChatText>
        <TypeWriter
          :text="res3()"
          :finishTyping="handleFinish"
          :eleScrollTop="props.eleScrollTop"
        />
      </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import { useFormDataStore } from "../../../../stores/FormData";
import ChatContainer from "../child/ChatContainer.vue";
import ChatText from "../child/ChatText.vue";
import Profile from "./Profile.vue";
import TypeWriter from "./TypeWriter.vue";
import { Ref, ref } from "vue";
import { res3 } from "./chatResponse";

const props: any = defineProps({ eleScrollTop: Function });

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
