<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
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
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function nextForm(value: string | number) {
  formData.update(id, value);
  next();
}

const ques: string[] = ["Single", "Family no kids", "Family with kids"];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Wages usage'" />
    <QMain>
      <QTitle>
        Your living arrangement may affect your spending and savings decisions
      </QTitle>
      <GridContainer>
        <QRowButton
          v-for="(q, i) of ques"
          :key="i"
          :value="q"
          :setData="nextForm"
          :isActive="q == formData[id] ? true : false"
        />
      </GridContainer>
    </QMain>
  </QContainer>
</template>
