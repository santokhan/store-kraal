<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useFormDataStore } from "../../../../stores/FormData";
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

function backToHome() {
  router.push("/");
}

// state lifting
function nextForm(value: string) {
  formData.update(id, value);
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
    <QHeader :prevForm="backToHome" :title="'Personal profile'" />
    <QMain>
      <QTitle
        >About what percentage of your earning goes to retirement plans</QTitle
      >
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
