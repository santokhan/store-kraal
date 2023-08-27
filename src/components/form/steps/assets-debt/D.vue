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
import QCheckBox from "../layout/QCheckBox.vue";
//
import { compare, setData, disabled } from "../../methods/Form";

const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function updateData(q: any): void {
  formData.updateAssets("d", q);
}

const ques: string[] = [
  "Primary residence",
  "Vacation property",
  "Investment property",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Assets & debt'" />
    <QMain>
      <QTitle>Select your real estate type</QTitle>
      <QCheckBox
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.assets.d, q)"
      />
      <QCheckBox
        :value="'none'"
        :setData="
          () => {
            updateData('none');
          }
        "
        :isActive="compare(formData.assets.d, 'none')"
      />
      <QNextButton :nextForm="next" :disabled="disabled(formData.assets.d)" />
    </QMain>
  </QContainer>
</template>
