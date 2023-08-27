<script lang="ts" setup>
import { RouterLink } from "vue-router";

const props = defineProps<{
  tab: number;
  handleTab: (n: number) => void;
  index: number;
}>();

function stateLifting() {
  props.handleTab(props.tab);
}
</script>

<template>
  <RouterLink
    @click="stateLifting"
    class="w-full flex items-center gap-3 text-base px-3 py-1 sm:py-2 rounded-lg"
    :class="
      () =>
        props.tab === props.index
          ? 'bg-kraal-blue-500 text-white'
          : 'text-noom-text-900 hover:bg-gray-200 focus:bg-kraal-blue-500 focus:text-white'
    "
    to=""
  >
    <slot></slot>
  </RouterLink>
</template>
