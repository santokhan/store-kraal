<script setup lang="ts">
import { ref } from "vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";

const slideNumber = ref(0);

function changeSlide(controller: number) {
  if (controller < 0) {
    if (0 < slideNumber.value) {
      slideNumber.value = slideNumber.value - 1;
    } else {
      slideNumber.value = 2;
    }
  } else {
    if (slideNumber.value < 2) {
      slideNumber.value = slideNumber.value + 1;
    } else {
      slideNumber.value = 0;
    }
  }
}

const slideClasses = `w-full rounded-xl space-y-3 p-5 lg:p-8 border-t-4 border-kraal-blue-500 shadow-xl shadow-gray-200`;
</script>

<template>
  <div class="flex items-center gap-4 py-12">
    <button
      type="button"
      @click="
        () => {
          changeSlide(-1);
        }
      "
      class="text-2xl"
    >
      <i class="fa fa-angle-left"></i>
    </button>
    <div title="slider" class="">
      <div v-if="slideNumber == 0" :class="slideClasses">
        <img
          class="h-10"
          src="../../../../assets/image/icon/mint-security/trusted-new@3x.webp"
        />
        <QTitle class="">Trusted</QTitle>
        <QSubTitle>
          Mint comes from the makers of TurboTax® and QuickBooks®, trusted by
          millions with sensitive data.
        </QSubTitle>
      </div>
      <div v-if="slideNumber == 1" :class="slideClasses">
        <img
          class="h-10"
          src="../../../../assets/image/icon/mint-security/protected-new@3x.webp"
        />
        <QTitle class="">Protected</QTitle>
        <QSubTitle>
          Mint participates in security scanning with VeriSign to help ensure
          security for sensitive data transfer.
        </QSubTitle>
      </div>
      <div v-if="slideNumber == 2" :class="slideClasses">
        <img
          class="h-10"
          src="../../../../assets/image/icon/mint-security/multi-factor-new@3x.webp"
        />
        <QTitle class="">Dedicated</QTitle>
        <QSubTitle>
          We use measures like multi-factor authentication, designed to help you
          protect access to your account.
        </QSubTitle>
      </div>
    </div>
    <button
      type="button"
      @click="
        () => {
          changeSlide(1);
        }
      "
      class="text-2xl"
    >
      <i class="fa fa-angle-right"></i>
    </button>
  </div>
</template>
