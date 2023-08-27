<script lang="ts" setup>
import { useRouter } from "vue-router";
//
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

const router: any = useRouter();
const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function formNext(value: string) {
  formData.updateInvest("a", value);
  next();
}
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Assets & debt'" />
    <QMain>
      <QTitle>How happy are you with your current financial situation?</QTitle>
      <QRange :setData="formNext" :value="formData.invest.a" />
    </QMain>
  </QContainer>
</template>
