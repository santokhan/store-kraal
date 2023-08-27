<template>
  <QContainer>
    <QHeader :prevForm="prevForm" :title="'Personal profile'" />
    <QMain>
      <QTitle>Select your employment status</QTitle>
      <GridContainer>
        <QRowButton
          v-for="(q, i) in ques"
          :key="i"
          :setData="nextForm"
          :value="q"
          :isActive="q == formData.profile.employment ? true : false"
        />
      </GridContainer>
    </QMain>
  </QContainer>
</template>

<script lang="ts" setup>
import { useFormDataStore } from "../../../../stores/FormData";
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QRowButton from "../layout/QRowButton.vue";
import QTitle from "../layout/QTitle.vue";

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
  formData.$patch({ profile: { employment: value } });
  next();
}

const ques: string[] = [
  "Student",
  "Employed part-time",
  "Employed full-time",
  "Not employed",
  "Retired",
];
</script>
