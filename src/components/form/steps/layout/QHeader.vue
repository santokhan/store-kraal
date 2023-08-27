<script setup lang="ts">
import QProgressBar from "../layout/QProgressBar.vue";
import BackButton from "./header/BackButton.vue";
import Kraal from "../../../icons/kraal.vue";

const { prevForm, title, theme }: any = defineProps({
  prevForm: Function,
  title: String,
  theme: String,
});
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between pt-5 pb-3">
      <BackButton :prevForm="prevForm"></BackButton>
      <div class="text-kraal-blue-500 uppercase font-semibold text-sm">
        <span v-if="title">{{ title }}</span>
        <Kraal v-else class="h-6 text-kraal-blue-500" />
      </div>
      <BackButton :invisible="true"></BackButton>
    </div>
    <div class="flex flex-col items-center gap-3 py-2">
      <QProgressBar :theme="theme" />
      <slot></slot>
    </div>
  </div>
</template>
