<template>
  <button
    type="button"
    v-if="scrollButton"
    @click="handleClick"
    :class="`w-10 h-10 absolute bottom-24 sm:bottom-12 left-1/2
    flex justify-center items-center border rounded-full transition-all ease-in scroll-to-bottom`"
  >
    <ArrowRight class="w-5 rotate-90" />
  </button>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import ArrowRight from "../../../icons/arrow-right.vue";

const props = defineProps<{ handleScroll: () => void }>();

const scrollButton: Ref<boolean> = ref(true);
function handleClick() {
  scrollButton.value = false;
  props.handleScroll();
}
</script>

<style scoped>
.scroll-to-bottom {
  animation: scrollBTN 1s ease-in-out infinite;
  transform: translateX(-50%);
}
.scroll-to-bottom:hover {
  animation: none;
  transform: translateX(-50%) translateY(10px);
  transition: all;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}
@keyframes scrollBTN {
  0% {
    transform: translateX(-50%) translateY(0px);
    opacity: 0.5;
  }
  50% {
    transform: translateX(-50%) translateY(20px);
    opacity: 0.8;
  }
  100% {
    transform: translateX(-50%) translateY(0px);
    opacity: 0.5;
  }
}
</style>
