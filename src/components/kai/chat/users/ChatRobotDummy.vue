<template>
  <ChatContainer :robot="true">
    <Profile>🤖</Profile>
    <ChatText>
      <TypeWriter :text="props.text" />
      <slot></slot>
    </ChatText>
  </ChatContainer>
</template>

<script lang="ts" setup>
import ChatContainer from "../child/ChatContainer.vue";
import TypeWriter from "./TypeWriter.vue";
import Profile from "./Profile.vue";
import ChatText from "../child/ChatText.vue";

const props = defineProps({ text: String });
</script>
0
