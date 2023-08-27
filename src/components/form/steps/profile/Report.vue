<template>
  <QContainer class="bg-transparent">
    <QHead :prevForm="back"> </QHead>
    <QMain>
      <div class="container mx-auto block px-4">
        <div class="h-80">
          <div class="main-img-animate">
            <img
              class="w-full h-full object-contain rounded rounded-bl-[100px]"
              src="../../../../assets/image/banner-576.png"
              alt="report"
            />
          </div>
        </div>

        <div class="flex items-center h-full w-full py-4">
          <div class="w-full md:w-auto">
            <QTitle class="text-2xl text-center text-kraal-blue-500 font-semibold">
              I Want a Bigger Pie
            </QTitle>
            <QSubTitle class="text-base">
              We’ll work with you to develop your 3-year wow plan and provide unwavering
              support and guidance to achieve it!
            </QSubTitle>
          </div>
        </div>
      </div>
      <QNextButton :nextForm="next" :class="'mt-8'"></QNextButton>
    </QMain>
  </QContainer>
</template>

<script lang="ts" setup>
import QContainer from "../layout/QContainer.vue";
import QHead from "../layout/QHead.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";

const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});
</script>

<style scoped>
.main-img-animate {
  height: 100%;
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
