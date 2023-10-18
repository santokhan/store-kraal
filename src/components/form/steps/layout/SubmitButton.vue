<script setup lang="ts">
import ArrowRight from "../../../icons/arrow-right.vue";

const props = defineProps<{
  disabled?: boolean;
  text?: string;
  theme?: string;
}>();

const styles = (disabled: boolean, theme: string | undefined) =>
  theme === "dark"
    ? disabled
      ? "bg-gray-400 text-kraal-dark-500 "
      : "bg-white text-kraal-dark-500 parent "
    : disabled
      ? "bg-noom-stone-400 text-white "
      : "bg-kraal-dark-500 text-white parent ";
</script>

<template>
  <!-- :disabled="props.disabled" -->
  <button type="submit" :class="[
    'appearance-none overflow-hidden w-full relative font-medium rounded-xl px-12 h-14 shadow-xl',
    'flex gap-4 justify-center items-center', styles(props.disabled, props.theme)]">
    <div :class="[
      'h-full flex justify-center items-center rounded-r-full text-base arrow',
      props.theme === 'dark' ? 'bg-kraal-dark-500/25' : 'bg-white/25']" aria-hidden="true">
      <ArrowRight class="w-5 text-white" aria-hidden="true" />
    </div>
    {{ props.text || "Continue" }}
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
