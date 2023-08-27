<script setup lang="ts">
import { reactive, watchEffect, ref } from "vue";
import { useRouter } from "vue-router";
//
import active from "../../methods/active";
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QFooter from "../layout/QFooter.vue";
import QHead from "../layout/QHead.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import QRowButton from "../layout/QRowButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";

const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

const router: any = useRouter();
</script>

<template>
  <div class="bg-kraal-dark-500 text-white">
    <QContainer class="bg-transparent h-screen">
      <div class="h-full flex flex-col justify-between pb-16">
        <QHead :theme="'dark'" :prevForm="back" />
        <div>
          <QTitle class="text-white">What is Kraal?</QTitle>
          <QSubTitle class="text-white"
            >Kraal helps you transform your life. We’ve made it easy to find money to
            invest and to pay off your debt. We do this by making budgeting dead
            simple.</QSubTitle
          >
        </div>
        <QNextButton :nextForm="next" :class="'mt-8'" theme="dark" />
      </div>
    </QContainer>
  </div>
</template>
