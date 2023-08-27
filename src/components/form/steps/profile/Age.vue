<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
//
import { useFormDataStore } from "../../../../stores/FormData";
import { usePageStore } from "../../../../stores/Page";
import { useProgressStore } from "../../../../stores/progress";
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
import QSquareInput from "../layout/QSquareInput.vue";
import QRange from "../layout/QRange.vue";

const formData: any = useFormDataStore();
const router: any = useRouter();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function prevForm() {
  back();
}

// state lifting
function nextForm(value: string | number) {
  formData.$patch({ profile: { age: value } });

  setTimeout(() => {
    next();
  }, 150);
}

function makeArray(ageMin: string | number) {
  ageMin = typeof ageMin === "string" ? parseInt(ageMin) : ageMin;

  let ages = [];
  let ageMax: number = ageMin + 10;
  for (let i = ageMin; i < ageMax; i++) {
    ages.push(i);
  }
  return ages;
}

const ages: number[] = makeArray(formData.profile.ageGroup);
</script>

<template>
  <QContainer>
    <QHeader :prevForm="prevForm" :title="'Personal profile'" />
    <QMain>
      <!-- <QTitle>What is your age?</QTitle> -->
      <div class="grid place-items-center">
        <div class="grid grid-cols-3 justify-center gap-x-4 gap-y-4">
          <div class="col-span-2 text-xl flex justify-start items-center">
            Select your age:
          </div>
          <QSquareInput
            v-for="(age, i) in ages"
            :key="i"
            :value="age"
            :setData="nextForm"
            :isActive="age === formData.profile.age ? true : false"
          />
        </div>
      </div>
    </QMain>
  </QContainer>
</template>
