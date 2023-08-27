<template>
  <!-- Custom view routes for Questions & Answers -->
  <Questions v-if="view === 1" :openAnsView="openAnsView" />
  <Answers v-else-if="view === 2" :next="props.next" />
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import Answers from "./answers/Answers.vue";
import Questions from "./questions/Questions.vue";

const props = defineProps({
  id: Number,
  back: Function,
  next: Function,
});

// state based routes
const view: Ref<number> = ref(1);
function openAnsView() {
  view.value = 2;
}
</script>
