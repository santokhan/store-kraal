<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50 h-full">
    <ChatContainer :robot="true">
        <ChatText>
          <TypeWriter :text="props.text" />
        </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import TypeWriter from "./TypeWriter.vue";
import Profile from "./Profile.vue";
import Like from "../../../icons/like.vue";
import Dislike from "../../../icons/dislike.vue";
import FeedbackButton from "./feedback/FeedbackButton.vue";
import { Ref, ref } from "vue";
import ChatContainer from "../child/ChatContainer.vue";
import ChatText from "../child/ChatText.vue";

const props = defineProps({ text: String });

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
