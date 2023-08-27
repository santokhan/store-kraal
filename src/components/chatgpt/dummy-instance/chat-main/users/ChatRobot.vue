<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50 h-full">
    <ChatContainer :robot="true">
      <ChatText>
        <TypeWriter
          :text="props.text || ''"
          :finishTyping="() => {}"
          :eleScrollTop="() => {}"
        />
      </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import TypeWriter from "./TypeWriter.vue";
import ChatContainer from "./ChatContainer.vue";
import ChatText from "../ChatText.vue";

const props = defineProps<{ text: string | undefined }>();

const isLiked: Ref<boolean> = ref(false);
const isDisLiked: Ref<boolean> = ref(false);
const disabledLikeDislike: Ref<boolean> = ref(false);

function handleLike() {
  isLiked.value = true;
  handleFeedback();
  disabledLikeDislike.value = true;
}
function handleDisLike() {
  isDisLiked.value = true;
  handleFeedback();
  disabledLikeDislike.value = true;
}

const feedBack: Ref<boolean> = ref(false);
function handleFeedback() {
  feedBack.value = !feedBack.value;
}
</script>
