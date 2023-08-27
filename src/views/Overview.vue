<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import IFrame from "../components/overview/IFrame.vue";

// const currentLocalHost = "http://192.168.0.106:5173/";
const currentLocalHost = ref("");

watchEffect(() => {
  const origin = window.location.origin;
  currentLocalHost.value = origin;
});

const form = currentLocalHost.value + "/" + "form/";
const signin = currentLocalHost.value + "/" + "signin/";

function counTimer(item: number) {
  return 1000 * item;
}

const totalForm = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
];
</script>

<template>
  <div class="bg-gray-100 flex flex-wrap justify-center gap-8 p-8">
    <IFrame :src="currentLocalHost" :timer="0"></IFrame>
    <IFrame :src="signin" :timer="0"></IFrame>

    <IFrame
      v-for="(item, index) in totalForm"
      :key="index"
      :src="form + item"
      :index="item"
      :timer="counTimer(item)"
    ></IFrame>

    <IFrame :src="currentLocalHost + '/security-info'" :timer="0"></IFrame>
  </div>
</template>
