<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
//
import { useFormDataStore } from "../../../../stores/FormData";
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
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function nextForm(value: string) {
  formData.$patch({ mindset: { retirement: value } });
  next();
}

const ques: string[] = [
  "1-5%",
  "6-10%,",
  "11-15%",
  "16-20%,",
  "Greater than 20%",
  "Less than 1%",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Assets & debt'" />
    <QMain>
      <QTitle
        >Approximately what percentage of your earning go into retirement
        plans</QTitle
      >
      <QRowButton
        v-for="q in ques"
        :setData="nextForm"
        :value="q"
        :isActive="q == formData.mindset.retirement ? true : false"
      />
    </QMain>
  </QContainer>
</template>
