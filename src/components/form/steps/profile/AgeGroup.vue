<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Personal profile'" />
    <QMain>
      <QTitle>Select your age group</QTitle>
      <GridContainer>
        <QRowButton
          v-for="(age, i) in ageGroup"
          :key="i"
          :value="age === '70' ? '70+' : age + 's'"
          :setData="nextForm"
          :isActive="age == formData.profile.ageGroup ? true : false"
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

// state lifting
function nextForm(value: string | number) {
  if (typeof value === "string") {
    value = parseInt(value);
  }
  formData.$patch({ profile: { ageGroup: value } });
  setTimeout(() => {
    next();
  }, 150);
}

let ageGroup: string[] = ["20", "30", "40", "50", "60", "70"];
</script>
