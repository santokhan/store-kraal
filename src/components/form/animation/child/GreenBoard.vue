<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";

const { handleState }:any = defineProps({ handleState: Function });

const index = ref(0);
const textArr = ["Your are close to being fully onboarded!"];

watchEffect(() => {
  function animation() {
    const interval = setInterval(() => {
      if (index.value + 1 < textArr.length) {
        index.value = index.value + 1;
      } else {
        clearInterval(interval);
        handleState();
      }
    }, 6000);
  }
  animation();
});
</script>

<template>
  <div class="flex justify-center items-center px-14 w-full h-screen">
    <div class="bg-animation bg-kraal-blue-500/25">
      <div class="inner bg-kraal-blue-500"></div>
    </div>
    <div class="text-3xl text-animation z-20">{{ textArr[index] }}</div>
  </div>
</template>

<style scoped>
.bg-animation {
  position: absolute;
  bottom: -50%;
  right: 100%;

  width: 100vh;
  height: 100vh;
  border-radius: 100%;
  transform: scale(1);

  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: back;
  animation-timing-function: ease-in;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
@media (min-width: 576px) {
  .bg-animation {
    bottom: -40%;
    left: -40%;
  }
}
.inner {
  width: 80%;
  height: 80%;
  border-radius: 100%;
}
@keyframes back {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(7);
  }
}
.text-animation {
  width: 100%;
  text-align: center;
  opacity: 1;
  color: white;

  animation-name: text;
  animation-timing-function: ease-in;
  animation-duration: 6000ms;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}
@keyframes text {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
