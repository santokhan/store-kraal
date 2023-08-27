<script setup lang="ts">
const { disabled }: any = defineProps({ disabled: Boolean });

function animate(condition: boolean): string {
  return condition ? "move-down" : "move-up";
}
</script>

<template>
  <div
    :class="`w-full fixed-bottom-h fixed bottom-0 left-0 
    bg-white/50 backdrop-blur-sm 
    ${animate(disabled)}`"
  >
    <div class="w-full h-20 flex items-center max-w-[432px] mx-auto px-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.move-up {
  transform: translateY(100%);
  animation: move-up 0.5s ease-in forwards;
}
@keyframes move-up {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.move-down {
  transform: translateY(0%);
  animation: move-down 0.25s ease-in forwards;
}
@keyframes move-down {
  0% {
    transform: translateY(0%);
    opacity: 0;
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
}
</style>
