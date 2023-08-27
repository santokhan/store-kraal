
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
import { useFormDataStore } from "../../../../stores/FormData";
const router = useRouter();
const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function prevForm() {
  back();
}
function nextForm(value: string) {
  formData.update(id, value);
  next();
}

const ques: string[] = [
  "Spend 90% of income. Save invest  10%",
  "Spend 80% of income. Save invest 20%",
  "Spend 70% of income. Save invest 30%",
  "Spend less than 70% and save invest remainder",
  "I don’t know yet",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="prevForm" :title="'Personal profile'" />
    <QMain>
      <QTitle>What is your spending goal?</QTitle>
      <QSubTitle>What’s your total annual income before taxes?</QSubTitle>
      <GridContainer>
        <QRowButton
          v-for="(q, i) in ques"
          :key="i"
          :value="q"
          :setData="nextForm"
          :isActive="q == formData[id] ? true : false"
        />
      </GridContainer>
    </QMain>
  </QContainer>
</template>
