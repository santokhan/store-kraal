<script lang="ts" setup>import { reactive, ref, watchEffect } from "vue";

const { handleState } :any= defineProps({ handleState: Function });

const index = ref(0);
const textArr = [
  "Welcome to Kraal",
  "Link all your activity accounts to Kraal",
  "We will analyze and build your Kraal Action Plan (KAP 🧢)",
  "Kraal uses Plaid, the Financial industry gold standard, to connect to your accounts",
  "We encrypt all your data using best industry technologies and practices",
  "Thank you for your trust and patience",
  "Your are close to being fully onboarded!",
];

watchEffect(() => {
  const interval = setInterval(() => {
    if (index.value + 1 < textArr.length) {
      index.value = index.value + 1;
    } else {
      clearInterval(interval);
      handleState();
    }
  }, 3000);
});
</script>

<template>
  <div class="flex justify-center items-center px-14 w-full h-screen">
    <div class="bg-animation"></div>
    <div class="text-3xl text-animation z-20">{{ textArr[index] }}</div>
  </div>
</template>

<style scoped>
.bg-animation {
  position: absolute;

  width: 100vw;
  height: 100vh;

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
    background-color: rgb(255, 255, 255);
  }
  100% {
    background-color: rgb(36, 99, 235);
    background-color: #111d2d;
  }
}
.text-animation {
  width: 100%;
  text-align: center;
  opacity: 1;
  color: white;

  animation-name: text;
  animation-timing-function: ease-in;
  animation-duration: 3000ms;
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
