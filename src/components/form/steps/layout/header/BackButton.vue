<script setup lang="ts">
import Back from "../../../../icons/back.vue";

const { prevForm, invisible, theme }: any = defineProps({
  prevForm: Function,
  invisible: Boolean,
  theme: String,
});

const hidden: string = invisible ? "invisible " : "";
const themeStyles: string = theme === "dark" ? "text-white " : "text-kraal-dark-500 ";
</script>

<template>
  <button
    type="button"
    @click="prevForm"
    class="max-w-[24px] w-full rounded-full hover:text-kraal-blue-600"
    :class="hidden + themeStyles"
  >
    <Back class="h-4" />
  </button>
</template>
