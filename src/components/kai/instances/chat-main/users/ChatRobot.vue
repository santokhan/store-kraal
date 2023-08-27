<template>
  <div class="bg-chatgpt-400 border-t border-gray-900/50">
    <ChatContainer :robot="true">
      <Profile user="robot" />
      <ChatText>
        <TypeWriter
          v-if="props.data"
          :text="props.data"
          :eleScrollTop="props.eleScrollTop"
        />
        <span
          v-else
          class="mx-2 w-[9px] h-4 bg-gray-100 inline-block translate-y-[2px] on-off"
        ></span>
      </ChatText>
    </ChatContainer>
  </div>
</template>

<script lang="ts" setup>
import TypeWriter from "./TypeWriter.vue";
import ChatContainer from "./ChatContainer.vue";
import Profile from "./Profile.vue";
import ChatText from "../ChatText.vue";

const props = defineProps<{
  data: any;
  eleScrollTop: () => void;
}>();
</script>

<style scoped>
.on-off {
  animation: onOff 0.5s ease-in-out infinite;
}
@keyframes onOff {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  51% {
    visibility: visible;
  }
  100% {
    visibility: visible;
  }
}
</style>
