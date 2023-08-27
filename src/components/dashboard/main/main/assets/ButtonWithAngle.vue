<script lang="ts" setup>
const { toggle, isClick }: any = defineProps({
  isClick: Boolean,
  toggle: Function,
});

const onButtonStyle: string =
  isClick === true ? "text-kraal-blue-500 border-kraal-blue-500" : "";
</script>

<template>
  <button type="button" @click="toggle" class="rounded-lg px-2 py-1 border flex items-center gap-2 capitalize font-medium"
    :class="onButtonStyle">
    <span class="leading-[1]">
      <slot></slot>
    </span>
    <svg v-if="isClick" class="rotate-90" width="6" height="10" viewBox="0 0 6 10" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-else width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>
