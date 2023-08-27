<script lang="ts" setup>
import { reactive } from "vue";
import Link from "./Link.vue";

const status = reactive({ toggle: false });
function toggle() {
  status.toggle = status.toggle ? false : true;
}

const css = {
  link:
    "block text-black text-base noom-nav mx-1 font-normal brown-ll hover:underline decoration-2 underline-offset-4",
};
</script>

<template>
  <div class="flex items-center md:order-2 xl:hidden">
    <button type="button" @click="toggle" class="text-xl">
      <i v-if="status.toggle" class="fa fa-plus rotate-45" aria-hidden="true"></i>
      <i v-else class="fa fa-bars" aria-hidden="true"></i>
    </button>

    <div
      v-if="status.toggle"
      class="absolute right-0 top-full w-screen h-screen bg-noom-200 animate-scale overflow-hidden"
    >
      <div
        class="flex flex-col gap-6 lg:gap-8 items-center px-4 py-8 text-xl uppercase h-full"
      >
        <Link href="/careers">careers</Link>
        <Link href="/product">product</Link>
        <Link href="/company">company</Link>
        <Link href="/support">support</Link>
        <Link href="/login">login</Link>
        <a
          href="http://kraal.ai"
          :class="
            'bg-kraal-dark-500 hover:bg-kraal-dark-700 rounded px-10 py-2 ' +
            'text-white text-center text-base font-semibold'
          "
          ><small>learn more</small></a
        >
      </div>
    </div>
  </div>
</template>
\
<style scoped>
.animate-scale {
  animation-name: scale;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-duration: 0.25s;
}

@keyframes scale {
  0% {
    height: 0;
  }

  100% {
    height: 100vh;
  }
}
</style>
