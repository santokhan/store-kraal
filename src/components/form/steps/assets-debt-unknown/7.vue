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
import { useFormDataStore } from "../../../../stores/FormData";

const formData: any = useFormDataStore();
const router: any = useRouter();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function nextForm(value: string | number) {
  formData.$patch({ wagesUsage: { statement: value } });
  next();
}

const ques = ["agree", "disagree"];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Wages usage'" />
    <QMain>
      <QTitle>Do you relate to the following statement?</QTitle>
      <QRowButton
        v-for="q in ques"
        :value="q"
        :setData="nextForm"
        :isActive="q == formData[id] ? true : false"
      />
    </QMain>
  </QContainer>
</template>
