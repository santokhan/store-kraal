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

const router = useRouter();
const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function updateData(q: string) {
  formData.updateAssets("i", q);
}

const ques: string[] = [
  "Mortgage",
  "Home equity loan",
  "HELOC (home equity line of credit)",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Assets & debt'" />
    <QMain>
      <QTitle>Select your property loans</QTitle>
      <QCheckBox
        v-for="q in ques"
        :value="q"
        :setData="
          () => {
            updateData(q);
          }
        "
        :isActive="compare(formData.assets.i, q)"
      />
      <QCheckBox
        :value="'none'"
        :setData="
          () => {
            updateData('none');
          }
        "
        :isActive="compare(formData.assets.i, 'none')"
      />
      <QNextButton :nextForm="next" :disabled="disabled(formData.assets.i)" />
    </QMain>
    <QFooter> </QFooter>
  </QContainer>
</template>
