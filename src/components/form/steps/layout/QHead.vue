<script setup lang="ts">
import Kraal from "../../../icons/kraal.vue";
import QProgressBar from "../layout/QProgressBar.vue";
import BackButton from "./header/BackButton.vue";

const { prevForm, theme }: any = defineProps({ prevForm: Function, theme: String });
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between pt-5 pb-3">
      <BackButton :prevForm="prevForm" :theme="theme"></BackButton>
      <Kraal class="h-6 text-kraal-blue-500" />
      <BackButton :invisible="true"></BackButton>
    </div>
    <div class="flex flex-col items-center gap-3 py-2">
      <slot></slot>
    </div>
    <QProgressBar></QProgressBar>
  </div>
</template>
