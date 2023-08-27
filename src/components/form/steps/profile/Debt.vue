<template>
  <QContainer>
    <QHeader :prevForm="back" :title="'Personal profile'" />
    <QMain>
      <QTitle>
        Do you have enough money saved to cover at least 3 month of living expenses?
      </QTitle>
      <QSubTitle>Consider your housing, food, health care and utilities.</QSubTitle>
      <GridContainer class="py-4">
        <QRowButton
          v-for="(q, i) in ques"
          :key="i"
          :setData="nextForm"
          :value="q"
          :isActive="q == formData.profile.debt ? true : false"
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
import QSubTitle from "../layout/QSubTitle.vue";
import QTitle from "../layout/QTitle.vue";

const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

// state lifting
function nextForm(value: any) {
  formData.$patch({ profile: { debt: value } });
  next();
}

const ques = ["No", "No, but it's not a concern", "Yes"];
</script>
