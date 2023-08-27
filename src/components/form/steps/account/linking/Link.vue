<script lang="ts" setup>
import { RouterLink } from "vue-router";

const { to }: any = defineProps({ to: String });
</script>

<template>
  <RouterLink
    :to="to"
    type="button"
    :class="
      'bg-white border rounded-2xl p-4 ' +
      'text-center text-lg whitespace-nowrap font-medium ' +
      'flex flex-col items-center gap-2 ' +
      'shadow-default ' +
      'hover:bg-gray-50 focus:scale-95 '
    "
  >
    <slot></slot>
  </RouterLink>
</template>
