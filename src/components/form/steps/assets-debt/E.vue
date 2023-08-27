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
const props = defineProps<{
  id: number;
  back: () => void;
  next: () => void;
}>();

function updateData(q: any) {
  formData.updateAssets("e", q);
}

const ques: string[] = [
  "Cash value life insurance",
  "Inherited IRA",
  "Collectibles of value",
  "Irrevocable trust (if you’re the beneficiary)",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="props.back" :title="'Assets & debt'" />
    <QMain>
      <QTitle>Select your complicated assets</QTitle>
      <QCheckBox
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.assets.e, q)"
      />
      <QCheckBox
        :value="'none'"
        :setData="
          () => {
            updateData('none');
          }
        "
        :isActive="compare(formData.assets.e, 'none')"
      />
      <QNextButton :nextForm="props.next" :disabled="disabled(formData.assets.e)" />
    </QMain>
  </QContainer>
</template>
