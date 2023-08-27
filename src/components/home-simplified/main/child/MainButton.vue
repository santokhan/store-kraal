<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink
    to="/form/1"
    :class="
      'rounded bg-kraal-dark-500 hover:bg-kraal-dark-700 my-5 h-14 w-full parent relative overflow-hidden ' +
      'flex justify-center items-center ' +
      'text-white font-medium text-lg '
    "
  >
    <div class="h-full bg-white/25 flex justify-center items-center rounded-r-full arrow">
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    <div>Continue</div>
  </RouterLink>
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
  animation: arrow 0.25s ease-in-out forwards;
}
@keyframes arrow {
  0% {
    transform: translateX(0%);
  }
}
</style>
