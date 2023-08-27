<script lang="ts" setup>
import { reactive } from "vue";
import Link from "./Link.vue";
import Cross from "../../../icons/cross.vue";
import Bars from "./Bars.vue";

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
    <button type="button" class="flex justify-center">
      <Bars :toggle="toggle" />
    </button>

    <div
      v-if="status.toggle"
      class="absolute right-0 top-full w-screen h-screen bg-kraal-dark-600 animate-scale overflow-hidden px-4"
    >
      <div class="flex flex-col gap-8 lg:gap-8 items-start px-6 py-8 uppercase h-full">
        <Link href="/careers">careers</Link>
        <Link href="/product">product</Link>
        <Link href="/company">company</Link>
        <Link href="/support">support</Link>
        <Link href="/more">learn more</Link>
        <a
          href="http://kraal.ai"
          :class="
            'bg-white hover:bg-gray-200 rounded-lg px-10 py-2 hidden ' +
            'text-noom-text-800 text-center text-base font-semibold'
          "
          >learn more</a
        >
      </div>
    </div>
  </div>
</template>

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
