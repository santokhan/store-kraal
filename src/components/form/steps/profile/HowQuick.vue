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
  formData.$patch({ profile: { quickly: value } });
  next();
}

const ques: string[] = ["Not urgent", "Very urgent"];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="prevForm" :title="'Personal profile'" />
    <QMain>
      <QTitle>How quickly do you need this Kraal service?</QTitle>
      <QRange
        :setData="nextForm"
        :value="formData.profile.quickly"
        :low="ques[0]"
        :high="ques[1]"
      />
    </QMain>
  </QContainer>
</template>
