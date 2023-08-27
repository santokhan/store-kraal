<template>
  <Modal />
  <div class="text-lg text-gray-600 pdf-main" id="PDFContent">
    <div class="bg-kraal-dark-500 text-white first-page p-4">
      <Kraal class="h-6" />
    </div>

    <div class="whitespace-pre-wrap px-4 py-8 bg-gray-100 border-b">
      {{ type }}
      <span
        v-if="writerIcon"
        class="mx-2 w-[9px] h-4 bg-kraal-dark-500 inline-block translate-y-[2px] on-off"
      ></span>
      <div v-if="!writerIcon" class="py-12"></div>
    </div>
  </div>

  <MobileView>
    <FixedBottom v-if="!writerIcon" class="border-t">
      <div class="px-4 w-full flex gap-4">
        <button
          type="button"
          @click="saveAsPDF"
          :class="
            'w-1/2 h-14 block py-2.5 font-normal text-base text-center border-2  rounded-lg  ' +
            'border-kraal-dark-700 text-noom-text-600 hover:border-kraal-dark-700 hover:text-noom-text-800'
          "
        >
          Save as pdf
        </button>
        <button
          type="button"
          @click="saveAsPDF"
          :class="
            'w-1/2 h-14 block py-2.5 font-normal text-base text-center border-2 rounded-lg ' +
            'text-white bg-kraal-dark-500 hover:bg-kraal-dark-700'
          "
        >
          Continue
        </button>
      </div>
    </FixedBottom>
  </MobileView>
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue";
import { useRouter } from "vue-router";
import CreatePDFFile from "./CreatePDF";
import MobileView from "../form/layouts/MobileView.vue";
import Modal from "./subscribe-modal/SubscribeModal.vue";
import { text } from "./text";
import FixedBottom from "../form/steps/layout/FixedBottom.vue";

const router = useRouter();
const type = ref("");
const writerIcon = ref(true);
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function prevForm() {
  back();
}

function nextForm() {
  next();
}
function saveAsPDF() {
  CreatePDFFile((doc) => {
    doc.save("Kraal.pdf");
  });
}

watchEffect(() => {
  const typingDelay = 25; // in milliseconds
  function typeWriter() {
    const interval = setInterval(() => {
      if (text.length > type.value.length) {
        type.value = text.slice(0, type.value.length + 1);
      } else {
        clearInterval(interval);
        writerIcon.value = false;
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
        console.log({
          milliseconds: timeStart,
          second: timeStart / 1000,
        });
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
