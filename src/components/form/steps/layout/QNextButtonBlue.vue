<script setup lang="ts">
const { nextForm, disabled, text, theme }: any = defineProps({
  nextForm: Function,
  disabled: Boolean,
  text: String,
  theme: String,
});

function styles(disabled: boolean, theme: string) {
  return theme === "dark"
    ? disabled
      ? "bg-noom-stone-400 text-white "
      : "bg-kraal-blue-500 text-white parent "
    : disabled
    ? "bg-noom-stone-400 text-white "
    : "bg-kraal-blue-500 text-white parent ";
}
</script>

<template>
  <button
    type="button"
    :class="`w-full h-14 overflow-hidden 
    flex gap-4 justify-center items-center 
    appearance-none relative font-medium rounded-xl px-12 shadow-xl 
    ${styles(disabled, theme)}`"
    @click="nextForm"
    :disabled="disabled"
  >
    <div
      class="h-full flex justify-center items-center rounded-r-full text-base arrow"
      :class="theme === 'dark' ? 'bg-kraal-dark-500/25' : 'bg-white/25'"
    >
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    {{ text || "Continue" }}
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
