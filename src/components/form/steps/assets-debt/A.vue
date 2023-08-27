<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
// Global import
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
import QCheckBox from "../layout/QCheckBox.vue";
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";
//
import { compare, setData, disabled } from "../../methods/Form";

const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function updateData(q: any): void {
  formData.updateAssets("a", q);
}

const ques: string[] = [
  "Employer retirement accounts 401k, 403b, 457",
  "IRA – Traditional, Rollover, Roth, SEP",
  "Pension / Profit sharing plan",
  "Other",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Assets & debt'" />
    <QMain>
      <QTitle>Select your retirement accounts</QTitle>
      <QCheckBox
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.assets.a, q)"
      />

      <QCheckBox
        :value="'none'"
        :setData="
          () => {
            updateData('none');
          }
        "
        :isActive="compare(formData.assets.a, 'none')"
      />
      <QNextButton :nextForm="next" :disabled="disabled(formData.assets.a)" />
    </QMain>
  </QContainer>
</template>
