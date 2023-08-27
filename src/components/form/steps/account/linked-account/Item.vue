<script lang="ts" setup>
import { RouterLink } from "vue-router";
import Edit from "../../../../icons/edit.vue";

const { amount, url }: any = defineProps({ amount: Number, url: String });
const style: string = amount > 0 ? "text-green-500" : "text-red-500";
</script>

<template>
  <div
    :class="
      'w-full relative font-medium rounded-xl px-4 py-5 mb-2 bg-white text-gray-500 border ' +
      'flex gap-4 items-center justify-between ' +
      'shadow-default'
    "
  >
    <span><slot></slot></span>
    <div class="flex gap-3 items-center">
      <span :class="style">${{ amount.toLocaleString() }}</span>
      <RouterLink type="button" class="hover:text-green-600" :to="url">
        <Edit class="h-4 text-gray-400 hover:text-gray-500" />
      </RouterLink>
    </div>
  </div>
</template>
