<template>
  <HeaderSimplified />
  <QContainer>
    <QMain>
      <div class="container mx-auto block px-4 py-8">
        <div class="main-img-animate">
          <img
            class="w-2/4 h-full rounded mx-auto"
            :src="photo"
            alt="kraal-survey-banner"
          />
        </div>

        <div class="flex justify-center items-center h-full w-full py-12">
          <div class="w-full md:w-auto">
            <div class="text-xl text-kraal-blue-500 font-semibold text-center">
              KraalAI
            </div>
            <div class="space-y-6">
              <QSubTitle class="text-base text-center">
                With the power to perform many of the <br />
                tasks of a human <strong>CFO</strong>, <strong>Kraal</strong> is
                <br />
                designed for personal finance and<br />
                is constantly improving.
                <br />
                <div class="mt-2">
                  <ReadMore :handleLearnMore="handleLearnMore" />
                </div>
              </QSubTitle>
              <QSubTitle class="" v-if="learnMoreIsOpen">
                <div class="text-base text-justify space-y-2">
                  <p>
                    Traditionally, the role of a <strong>CFO</strong> had been reserved
                    for large companies due to the high costs associated with hiring one.
                  </p>
                  <p>
                    Recently, smaller businesses have turned to fractional CFOs. They buy
                    a slice of a CFOs work week to make the hire affordable.
                  </p>
                  <p class="font-medium text-kraal-blue-500 py-3">
                    Today, <strong>Kraal</strong> wants to offer tailored
                    <strong>CFO</strong> services to households.
                  </p>
                  <p>
                    We view the household as a micro business that can benefit immensely
                    from having a micro <strong>CFO</strong>.
                  </p>
                  <p>
                    We want to help families get out of debt, improve cash flow, make
                    strategic plans and achieve brighter financial futures.
                  </p>
                  <p>
                    Although <strong>Kraal</strong> is still in its early stages, we're
                    working tirelessly to improve and expand our capabilities every day!
                  </p>
                  <p>Try <strong>Kraal</strong> now and experience it for yourself.</p>
                </div>
              </QSubTitle>
            </div>
          </div>
        </div>
      </div>
      <div class="py-2"></div>
      <FixedBottom v-if="learnMoreIsOpen">
        <QNextButton :nextForm="nextForm" text="Next" />
      </FixedBottom>
    </QMain>
  </QContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import QContainer from "../../layout/QContainer.vue";
import QMain from "../../layout/QMain.vue";
import QNextButton from "../../layout/QNextButton.vue";
import QSubTitle from "../../layout/QSubTitle.vue";
import FixedBottom from "../../layout/FixedBottom.vue";
import ReadMore from "../../../../shared/button/ReadMore.vue";
import photo from "../../../../../assets/image/cartoon.png";
import HeaderSimplified from "../../../../shared/header/HeaderSimplified.vue";

const props = defineProps<{ id: Number; back: Function; next: Function }>();

function prevForm(): void {
  props.back();
}
function nextForm(): void {
  props.next();
}

const learnMoreIsOpen: any = ref(false);
function handleLearnMore(): void {
  learnMoreIsOpen.value = !learnMoreIsOpen.value;
}
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
</style>
