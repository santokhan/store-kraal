<script lang="ts" setup>
import GridContainer from "../layout/GridContainer.vue";
import QContainer from "../layout/QContainer.vue";
import QHeader from "../layout/QHeader.vue";
import QMain from "../layout/QMain.vue";
import QRowButton from "../layout/QRowButton.vue";
import QTitle from "../layout/QTitle.vue";
import { useFormDataStore } from "../../../../stores/FormData";

const formData: any = useFormDataStore();
const { id, back, next }: any = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

function prevForm() {
  back();
}

function nextForm(value: string) {
  formData.update(id, value);
  next();
}

const ques: string[] = [
  "New baby",
  "New house",
  "New marriage",
  "Wedding",
  "Lost job",
  "Health issues",
  "Divorce",
  "Moved new State",
  "Other",
  "No I don’t have an event",
];
</script>

<template>
  <QContainer>
    <QHeader :prevForm="prevForm" :title="'Wages usage'" />
    <QMain>
      <QTitle>
        Having an important life event recently or in the future can be a great motivation
        to stay the course
      </QTitle>
      <GridContainer>
        <QRowButton
          v-for="(q, i) in ques"
          :key="i"
          :setData="nextForm"
          :value="q"
          :isActive="q == formData[id] ? true : false"
        />
      </GridContainer>
    </QMain>
  </QContainer>
</template>
