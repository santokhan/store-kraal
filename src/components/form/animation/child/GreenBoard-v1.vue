<script lang="ts" setup>import { reactive } from "vue";

const { handleState } :any= defineProps({ handleState: Function });

const state = reactive({ text: "" });

setTimeout(() => {
  state.text = "Based on your answers,";
}, 1600);
setTimeout(() => {
  state.text = "We've created a personalized plan";
}, 5000);
setTimeout(() => {
  state.text = "To help you relieve stress and andxious feelings.";
}, 8000);
setTimeout(() => {
  state.text = "Let's get started to make";
}, 12000);
setTimeout(() => {
  state.text = "Positive things happen.";
}, 16000);
setTimeout(() => {
  handleState();
}, 18000);
</script>

<template>
  <div class="bg-animation bg-kraal-blue-500">
    <div class="text-3xl text-animation">{{ state.text }}</div>
  </div>
</template>

<style scoped>
.bg-animation {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 60px;

  width: 100%;
  height: 100vh;
  border-top-left-radius: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: back;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes back {
  0% {
    width: 0;
    height: 0;
    border-top-left-radius: 100%;
  }
  5% {
    width: 0;
    height: 0;
    border-top-left-radius: 100%;
  }
  30% {
    border-top-left-radius: 100%;
  }
  60% {
    border-top-left-radius: 420px;
  }
  75% {
    width: 100%;
    height: 100vh;
    border-top-left-radius: 200px;
  }
  80% {
    border-top-left-radius: 60px;
  }
  85% {
    border-top-left-radius: 30px;
  }
  85% {
    border-top-left-radius: 20px;
  }
  95% {
    border-top-left-radius: 10px;
  }
  100% {
    border-top-left-radius: 0;
  }
}
.text-animation {
  width: 100%;
  text-align: center;
  opacity: 1;
  color: white;

  animation-name: text;
  animation-timing-function: ease-in;
  animation-duration: 4s;
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
