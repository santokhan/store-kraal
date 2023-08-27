<template>
  <span class="leading-relaxed" ref="typeWriterEle">{{ updateTextArray.join(" ") }}</span>
  <span
    v-if="writerIcon"
    class="mx-2 w-[9px] h-4 bg-gray-100 inline-block translate-y-[2px] on-off"
  ></span>
</template>

<script lang="ts" setup>
import { watchEffect, ref, reactive } from "vue";

const props = defineProps<{
  text: string;
  finishTyping: () => void;
  eleScrollTop: () => void;
}>();

const textArray: string[] = props.text.split(" ");
const updateTextArray: string[] = reactive([]);
const writerIcon = ref(true);

watchEffect(() => {
  function typeWriter() {
    const typingDelay = 25; // in milliseconds
    let index = 0;

    const interval = setInterval(() => {
      if (textArray.length > updateTextArray.length) {
        updateTextArray.push(textArray[index]);
        index++;

        props.eleScrollTop();
      } else {
        clearInterval(interval);

        writerIcon.value = false;

        props.finishTyping();
      }
    }, typingDelay);
  }
  typeWriter();
});
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
