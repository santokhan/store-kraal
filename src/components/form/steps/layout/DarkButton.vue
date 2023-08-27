<script lang="ts" setup>
const { nextForm, disabled, text, theme }:any = defineProps({
  nextForm: Function,
  disabled: Boolean,
  text: String,
  theme: String,
});

const styles = (disabled: boolean, theme: string): string =>
  theme === "dark"
    ? disabled
      ? "bg-gray-400 text-kraal-dark-500 "
      : "bg-white text-kraal-dark-500 parent "
    : disabled
    ? "bg-noom-stone-400 text-white "
    : "bg-kraal-dark-500 text-white parent ";
</script>

<template>
  <button
    type="button"
    :class="
      'appearance-none overflow-hidden w-full relative font-medium rounded-xl px-12 h-14 mb-2 shadow-xl ' +
      'flex gap-4 justify-center items-center ' +
      styles(disabled, theme)
    "
    @click="nextForm"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.arrow {
  position: absolute;
  top: 0;
  width: 64px;
  right: 100%;
}
.parent:hover .arrow {
  transform: translateX(100%);
  animation: arrow 0.2s ease-in-out forwards;
  opacity: 1;
}
@keyframes arrow {
  0% {
    transform: translateX(0%);
    opacity: 0;
  }
}
</style>
