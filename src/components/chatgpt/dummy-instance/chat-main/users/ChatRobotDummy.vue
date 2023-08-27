<template>
  <ChatContainer :robot="true">
    <Profile>🤖</Profile>
    <ChatText>
      <TypeWriter :text="props.text" :finishTyping="() => {}" :eleScrollTop="() => {}" />
      <slot></slot>
    </ChatText>
  </ChatContainer>
</template>

<script lang="ts" setup>
import TypeWriter from "./TypeWriter.vue";
import Profile from "./Profile.vue";
import ChatContainer from "./ChatContainer.vue";
import ChatText from "../ChatText.vue";

const props = defineProps<{ text: string }>();
</script>
