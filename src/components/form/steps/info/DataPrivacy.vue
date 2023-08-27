<template>
  <HeaderSimplified />
  <QContainer>
    <QMain>
      <div class="container mx-auto block px-4">
        <div class="main-img-animate">
          <img
            class="w-2/4 h-full rounded mx-auto"
            src="../../../../assets/image/cartoon-cropped.png"
            alt="banner"
          />
        </div>
        <div class="mx-auto h-full w-full py-8">
          <div class="w-full md:w-auto">
            <div class="space-y-8">
              <div class="space-y-2">
                <h4
                  class="text-xl leading-none font-semibold text-center text-kraal-blue-500"
                >
                  Data Privacy
                </h4>
                <QSubTitle class="text-base text-center">
                  Our strict data and privacy policies <br />
                  at <strong>Kraal</strong> ensure the safety of your <br />
                  information. Your user data is <br />
                  encrypted during tranfer <br />
                  to our databases. <br />
                </QSubTitle>
              </div>
              <CFO :handleContinue="handleContinue" :isContinue="isContinue" />
            </div>
          </div>
        </div>
      </div>
      <FixedBottom v-if="showButton">
        <QNextButton :nextForm="nextForm"></QNextButton>
      </FixedBottom>
    </QMain>
  </QContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import QContainer from "../layout/QContainer.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import FixedBottom from "../layout/FixedBottom.vue";
import CFO from "./CFO.vue";
import HeaderSimplified from "../../../shared/header/HeaderSimplified.vue";

const props = defineProps<{ id: Number; back: Function; next: Function }>();

function nextForm() {
  props.next();
}

const isContinue = ref(false);
const showButton = ref(false);
function handleContinue() {
  isContinue.value = !isContinue.value;

  setTimeout(() => {
    showButton.value = !showButton.value;
  }, 2 * 1000);
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
