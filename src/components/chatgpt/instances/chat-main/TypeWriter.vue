<template>
  <span class="leading-relaxed" ref="typeWriterEle">{{ type }}</span>
  <span
    v-if="writerIcon"
    class="mx-2 w-[9px] h-4 bg-gray-100 inline-block translate-y-[2px] on-off"
  ></span>
</template>

<script lang="ts" setup>
import { watchEffect, ref, Ref } from "vue";

const { text, finishTyping, eleScrollTop }: any = defineProps({
  text: String,
  finishTyping: Function,
  eleScrollTop: Function,
});

const writerIcon = ref(true);
const type: Ref<string> = ref("");

const typeWriterEle: any = ref(null);
function handleScrollIntoView() {
  typeWriterEle.value.scrollIntoView({ behaviour: "smooth", block: "end" });
}

watchEffect(() => {
  const typingDelay = 15; // in milliseconds
  function typeWriter() {
    const interval = setInterval(() => {
      if (text.length > type.value.length) {
        type.value = text.slice(0, type.value.length + 1);

        // handleScrollIntoView();
        eleScrollTop();
      } else {
        clearInterval(interval);
        writerIcon.value = false;
        finishTyping();
      }
    }, typingDelay);
  }
  typeWriter();

  function stopWatch() {
    let timeStart = 0;
    const interval = setInterval(() => {
      if (writerIcon.value) {
        timeStart = timeStart + 1;
      } else {
        clearInterval(interval);
        // console.log({
        //   milliseconds: timeStart,
        //   second: timeStart / 1000,
        // });
      }
    }, 1);
  }
  stopWatch();
});
</script>

<style scoped>
.on-off {
  animation: onOff 1s ease-in-out infinite;
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
