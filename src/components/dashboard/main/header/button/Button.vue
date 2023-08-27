<script lang="ts" setup>
const props = defineProps({ isOpen: Boolean });

function activeStyle(condition: boolean) {
  const initial = "rounded-lg w-8 h-8 flex justify-center items-center border" + " ";
  const updateStyle = condition ? "border-kraal-blue-500 text-kraal-blue-500 "
    : "bg-transparent text-noom-text-800 hover:border-kraal-blue-500 hover:text-kraal-blue-500 focus:border-kraal-blue-500 focus:text-kraal-blue-500 "
  return initial + updateStyle;
}
</script>

<template>
  <button type="button" :class="activeStyle(props.isOpen)">
    <slot></slot>
  </button>
</template>
