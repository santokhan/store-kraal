<template>
  <div
    class="text-noom-text-900 bg-secondary-500 px-4 py-3 rounded-lg border border-secondary-700 mt-1 text-sm trial-drop"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.trial-drop {
  animation: trialDrop 0.4s ease-in forwards;
  transform-origin: top left;
}
@keyframes trialDrop {
  0% {
    transform: scaleY(0.75);
    opacity: 0;
  }
  50% {
    transform: scaleY(1.1);
  }
  75% {
    transform: scaleY(0.9);
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}
</style>
