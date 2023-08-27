<script setup lang="ts">
import { useRoute } from "vue-router";

const route: any = useRoute();
const { theme }: any = defineProps({ theme: String });

const totalForm: number = 16;
const unit: number = 100 / totalForm;
const id: number = parseInt(route.params.id);
const width: { width: string } = { width: id * unit + "%" };

function themeStyle(mode: string = ""): string {
  return mode === "dark" ? "text-white" : "text-kraal-blue-500";
}
</script>

<template>
  <div
    :class="
      'w-full h-[10px] rounded-xl overflow-hidden relative progress-bar flex justify-evenly gap-2 bg-kraal-blue-500/10 ' +
      themeStyle(theme)
    "
  >
    <div
      class="h-full bg-kraal-blue-500 rounded-xl absolute left-0 top-0 overflow-hidden"
      :style="width"
    >
      <small
        class="w-[404px] h-full absolute left-0 top-0 z-20 flex justify-evenly items-center"
      >
        <i
          class="fa fa-check text-white"
          v-for="(item, i) in [0, 1, 2, 3]"
          :key="i"
        ></i>
      </small>
    </div>
    <svg
      v-for="(item, i) in [0, 1, 2, 3]"
      :key="i"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.475 2.525C5.179 1.229 4.501 0.002 4.5 0C4.499 0.002 3.82 1.23 2.525 2.525C1.229 3.82 0.002 4.499 0 4.5C0.002 4.5 1.23 5.18 2.525 6.475C3.821 7.771 4.499 8.998 4.5 9C4.501 8.998 5.18 7.77 6.475 6.475C7.771 5.18 8.998 4.501 9 4.5C8.998 4.5 7.77 3.82 6.475 2.525Z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<style scoped>
.progress-bar {
  transition: all 0.5s ease-in-out;
}
</style>
