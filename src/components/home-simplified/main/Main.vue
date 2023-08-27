<template>
  <main class="relative">
    <div class="max-w-md mx-auto h-screen flex flex-col justify-center space-y-4 px-4">
      <div class="py-20 flex flex-col items-center gap-3" title="div">
        <!-- <Kraal class="w-52" />
        <p class="text-lg text-center text-gray-400">
          Transforming finance,<br />empowering success!
        </p> -->
        <KraalBanner class="w-2/3" />
      </div>

      <div class="w-full px-2 space-y-3">
        <StartedBusiness :goToLogin="props.goToLogin" />
        <!-- <StartedIndividual :goToLogin="props.goToLogin" /> -->
      </div>

      <div class="py-10"></div>
      <!-- <ScrollToBottom :handleScroll="props.handleScroll" /> -->
    </div>

    <div class="relative overflow-hidden w-full h-20">
      <div :class="theme === 'dark' ? '' : 'triangle'"></div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import Kraal from "../../icons/kraal.vue";
import KraalBanner from "./KraalBanner.vue";
import StartedBusiness from "./get-started/Business.vue";
import StartedIndividual from "./get-started/Individual.vue";

const props = defineProps<{
  handleScroll: () => void;
  goToLogin: () => void;
  theme: string
}>();

// interface obj {
//   title: string;
//   desc: string;
// }
// const textOld: obj = {
//   title: "Learn to eat mindfully.",
//   desc: "Psychology is the key to lasting change",
// };
// const text: obj = {
//   title: "Earn and grow rich",
//   desc: "Make the most out of your money",
// };
</script>

<style scoped>
.main-img-animate {
  max-height: 500px;
  overflow: hidden;
  animation: drop 0.75s ease-in-out forwards;
}

@media (min-width: 576px) {
  .main-img-animate {
    max-height: none;
  }
}

@keyframes drop {
  0% {
    max-height: 100px;
  }
}

.triangle {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: calc(100vw) solid transparent;
  border-top: 0 solid transparent;
  border-bottom: 70px solid white;
}
</style>
