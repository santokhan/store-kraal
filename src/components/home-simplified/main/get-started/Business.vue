<template>
  <RouterLink to="/kraalai" :class="[
    'h-[3.25rem] w-full relative flex gap-4 justify-center items-center overflow-hidden rounded-xl',
    'px-12 bg-kraal-blue-500 parent shadow-inset text-white text-lg font-normal',
  ]">
    <div class="rounded-r-full text-base arrow-right bg-noom-orange-500/10">
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    Get Started
  </RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.arrow-right {
  position: absolute;
  height: 100%;
  top: 0;
  width: 64px;
  right: 100%;
  display: grid;
  place-items: center;
}

.parent:hover .arrow-right {
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

.shadow-inset {
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset -2px -2px 4px rgba(0, 0, 0, 0.1);
}
</style>
