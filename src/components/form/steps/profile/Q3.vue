<script lang="ts" setup>
import { reactive } from "vue";
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

function prevForm() {
  back();
}
// state lifting
function nextForm(value: string) {
  formData.update(id, value);
  next();
}
const ques: string[] = [
  " Once I commit to a goal I don’t need much encouragement, I just do it",
  " I need support and encouragement to accomplish my goals",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="prevForm" :title="'Personal profile'" />
    <QMain>
      <QTitle>How would you describe yourself?</QTitle>
      <GridContainer>
        <QRowButton
          v-for="(q, i) in ques"
          :key="i"
          :setData="nextForm"
          :value="q"
          :isActive="q == formData[id] ? true : false"
        />
      </GridContainer>
    </QMain>
  </QContainer>
</template>
