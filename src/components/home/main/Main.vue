<script lang="ts" setup>
import { RouterLink } from "vue-router";
import MainButton from "./child/MainButton.vue";
import banner576 from "../../../assets/image/banner-576.png";
import banner768 from "../../../assets/image/banner-768.png";
import banner992 from "../../../assets/image/banner-992.png";
import banner1920 from "../../../assets/image/banner.jpg";

const textOld = {
  title: "Learn to eat mindfully.",
  desc: "Psychology is the key to lasting change",
};

const text = {
  title: "Earn and grow rich",
  desc: "Make the most out of your money",
};
</script>

<template>
  <div class="container mx-auto block md:hidden px-4">
    <div class="main-img-animate">
      <img
        class="w-full h-full rounded rounded-bl-[100px]"
        src="../../../assets/image/banner-576.png"
        alt="kraal-survey-banner"
        srcset="
          ../../../assets/image/banner-576.png  576w,
          ../../../assets/image/banner-768.png  768w,
          ../../../assets/image/banner-992.png  992w,
          ../../../assets/image/banner.jpg     1200w
        "
      />
    </div>

    <div class="flex items-center h-full w-full lg:w-[53%] pt-8 lg:p-12">
      <div class="w-full md:w-auto">
        <p class="text-[2rem] text-center md:text-start mb-4">
          {{ text.title }}
        </p>
        <p class="text-[1.25rem] text-center md:text-start">
          {{ text.desc }}
        </p>
        <MainButton />
      </div>
    </div>
  </div>
  <div
    class="container mx-auto h-[60vh] lg:h-[100vh] roboto-slab relative hidden md:flex md:items-center pt-14 xl:pt-[100px]"
  >
    <div class="flex items-center h-full w-1/2 p-4">
      <div class="w-full md:w-auto">
        <p class="text-5xl text-center md:text-start mb-4">{{ text.title }}</p>
        <p class="text-3xl text-center md:text-start mb-3">
          {{ text.desc }}
        </p>
        <MainButton />
      </div>
    </div>
    <img
      src="../../../assets/image/banner-576.png"
      alt="kraal-survey-banner"
      srcset="
        ../../../assets/image/banner-576.png  576w,
        ../../../assets/image/banner-768.png  768w,
        ../../../assets/image/banner-992.png  992w,
        ../../../assets/image/banner.jpg     1200w
      "
      class="w-1/2 h-full hidden md:block object-cover object-center rounded-tl-[100px]"
    />
  </div>
</template>

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
</style>
