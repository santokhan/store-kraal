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
import FixedBottomSpace from "../../../shared/footer/FixedBottomSpace.vue";

const formData: any = useFormDataStore();
const props = defineProps<{
  id: number;
  back: () => void;
  next: () => void;
}>();

function updateData(q: any) {
  formData.updateAssets("g", q);
}

const ques: string[] = [
  "Credit card balances",
  "Past due bills",
  "Back taxes owed to IRS",
  "Private student loans",
  "Auto loan (or future lease payments added up).",
  "Federal student loans (Stafford, grad plus, parent plus)",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="props.back" :title="'Assets & debt'" />
    <QMain>
      <QTitle>Select your liabilities</QTitle>
      <QCheckBox
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.assets.g, q)"
      />
      <QCheckBox
        :value="'none'"
        :setData="
          () => {
            updateData('none');
          }
        "
        :isActive="compare(formData.assets.g, 'none')"
      />
      <FixedBottomSpace />
      <FixedBottom :disabled="disabled(formData.assets.g)">
        <QNextButton :nextForm="props.next" :disabled="disabled(formData.assets.g)" />
      </FixedBottom>
    </QMain>
  </QContainer>
</template>
