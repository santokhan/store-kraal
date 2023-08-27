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

const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function nextForm(value: string) {
  formData.$patch({ wagesUsage: { landModal: value } });
  next();
}

const ques: string[] = ["agree", "disagree"];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Wages usage'" />
    <QMain>
      <QSubTitle>
        Land on the modal on the main page with the main page in the background
        so users can see what their final page looks like. A modal will have
        words for users to Link Accounts. When they click to go to a new page
        that says We’ll do this later
      </QSubTitle>
      <QRowButton
        v-for="(q, i) in ques"
        :key="i"
        :setData="nextForm"
        :value="q"
        :isActive="q == formData.wagesUsage.landModal ? true : false"
      />
    </QMain>
  </QContainer>
</template>
