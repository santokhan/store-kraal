<template>
  <div class="flex items-center justify-end h-8 lg:h-10 gap-2 py-2">
    <FeedbackButton v-if="!isLiked" @click="handleLike" :disabled="disabledLikeDislike">
      <Like class="h-4" />
    </FeedbackButton>
    <FeedbackButton
      v-if="!isDisLiked"
      @click="handleDisLike"
      :disabled="disabledLikeDislike"
    >
      <Dislike class="h-4" />
    </FeedbackButton>
  </div>
  <Feedback v-if="feedBack" :handleFeedback="handleFeedback" />
</template>

<script lang="ts" setup>
import Like from "../../../../icons/like.vue";
import Dislike from "../../../../icons/dislike.vue";
import FeedbackButton from "./FeedbackButton.vue";
import Feedback from "./Feedback.vue";
import { Ref, ref } from "vue";

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
