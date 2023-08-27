<script lang="ts" setup>
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
//
import MobileView from "../../layouts/MobileView.vue";

const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});
</script>

<template>
  <div class="bg-kraal-dark-500 text-white h-screen">
    <MobileView>
      <QHead :theme="'dark'" :prevForm="back" />
      <div class="h-full">
        <div class="space-y-4 py-12">
          <QTitle class="text-white">Hey👋</QTitle>
          <QSubTitle class="text-white"> Welcome to Kraal! </QSubTitle>
          <QSubTitle class="text-white">
            We’d love to learn more about your financial journey and to share how we can
            help.
          </QSubTitle>
          <QSubTitle class="text-white">
            We use the best available encryption technology and practices to protect your
            information.
          </QSubTitle>
          <QSubTitle class="text-white">
            Please contact us if you have any questions.
          </QSubTitle>
          <QSubTitle class="text-white">Sincerely, <br />Team Kraal</QSubTitle>
        </div>
        <QNextButton :nextForm="next" theme="dark" />
      </div>
    </MobileView>
  </div>
</template>
