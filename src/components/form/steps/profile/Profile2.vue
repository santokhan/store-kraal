<script setup lang="ts">
import { reactive } from "vue";
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

// girl image page
const { id, back, next }:any = defineProps({ id: Number, back: Function, next: Function });
const router = useRouter();
const prevForm = () => {
  back();
};
const nextForm = () => {
  next();
};
</script>

<template>
  <QContainer>
    <QHead :prevForm="prevForm"></QHead>
    <div>
      <img
        src="/src/assets/image/kraal-girl.webp"
        alt="kraal-girl"
        class="w-full sm:w-96 overflow-hidden"
      />
    </div>
    <QSubTitle></QSubTitle>
    <QMain>
      <div class="w-full flex flex-col items-start pb-4">
        <QTitle>Shhhhh quick tell us the real :)</QTitle>
        <div class="flex gap-4 items-center mt-2">
          <img
            src="/src/assets/image/kraal-girl.webp"
            alt="profile"
            class="w-16 h-16 rounded-full border"
          />
          <div>
            <div class="py-1 font-bold text-xl">Alaina Nur</div>
            <div class="py-1 text-gray-500 font-medium">Ex Employee, Apple Inc.</div>
          </div>
        </div>
      </div>
      <QNextButton :nextForm="nextForm"></QNextButton>
    </QMain>
  </QContainer>
</template>
