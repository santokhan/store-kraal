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
const router = useRouter();
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
  formData.$patch({ profile: { interested: value } });
  next();
}

const ques: string[] = ["Manage spending", "Pay down debt", "Save and invest"];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="backToHome" :title="'Personal profile'" />
    <QMain>
      <QTitle>Which Kraal program are you interested in?</QTitle>
      <GridContainer>
        <QRowButton
          v-for="(q, i) in ques"
          :key="i"
          :value="q"
          :setData="nextForm"
          :isActive="q == formData.profile.interested ? true : false"
        />
      </GridContainer>
    </QMain>
  </QContainer>
</template>
