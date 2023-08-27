<script lang="ts" setup>
const props = defineProps<{
  tab: number;
  handleTab: (n: number) => void;
  index: number;
}>();

function stateLifting() {
  props.handleTab(props.tab);
}

function activeStyle(condition: boolean): string {
  return condition
    ? "bg-kraal-blue-500 text-white "
    : "bg-gray-50 text-noom-text-800 hover:bg-gray-200 focus:bg-kraal-blue-500 focus:text-white ";
}
</script>

<template>
  <button
    type="button"
    @click="stateLifting"
    class="w-full text-base px-3 py-2 rounded-lg transition-colors ease-out flex items-center gap-3 capitalize"
    :class="activeStyle(props.tab === props.index)"
  >
    <slot></slot>
  </button>
</template>
