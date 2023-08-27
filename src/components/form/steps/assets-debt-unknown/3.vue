<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
//
import active from "../../methods/active";
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QFooter from "../layout/QFooter.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QNextButton from "../layout/QNextButton.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import QRowButton from "../layout/QRowButton.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";
//
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Wages usage'"></QHeader>
    <QMain>
      <div>
        <QSubTitle>
          The first step in implementing a successful spending and savings plan
          is MINDSET. You’ll need to have a Assets & debt and you need to be
          sure everyone on your team (Spouse and Kids) are on board. You will
          collectively have to make sacrifices to achieve your financial goals.
          An older PS4 game console for the kids vs the new PS5. A slightly used
          Honda vs the new Lexus.
        </QSubTitle>
        <div class="flex justify-center items-center mt-12">
          <QRowButton :setData="next" :value="'got it'">Got it</QRowButton>
        </div>
      </div>
    </QMain>
  </QContainer>
</template>
