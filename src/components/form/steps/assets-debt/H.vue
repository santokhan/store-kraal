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
import FixedBottom from "../layout/FixedBottom.vue";

const formData: any = useFormDataStore();
const props = defineProps<{
  id: number;
  back: () => void;
  next: () => void;
}>();

function updateData(q: any) {
  formData.updateAssets("h", q);
}

const ques = [
  "Line of credit",
  "Personal loans owed to a bank or financial institution",
  "Financed purchases (furniture, appliances, electronics, cell phone)",
  "Money owed to family or friends",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="props.back" :title="'Assets & debt'" />
    <QMain>
      <QTitle>Select more liabilities</QTitle>
      <QCheckBox
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.assets.h, q)"
      />
      <QCheckBox
        :value="'none'"
        :setData="
          () => {
            updateData('none');
          }
        "
        :isActive="compare(formData.assets.h, 'none')"
      />
      <FixedBottom :disabled="disabled(formData.assets.h)">
        <QNextButton :nextForm="props.next" :disabled="disabled(formData.assets.h)" />
      </FixedBottom>
    </QMain>
  </QContainer>
</template>
