<script lang="ts" setup>
import MobileView from "../../../layouts/MobileView.vue";
import rhombus from "../../../../..//assets/image/icon/rhombus.png";
</script>

<template>
  <MobileView>
    <div class="w-full mt-5">
      <div class="flex justify-between border-b py-2">
        <div class="uppercase font-semibold">Price Today</div>
      </div>
      <div class="flex justify-between py-3">
        <div>14-day trial</div>
        <div>$00.00</div>
      </div>
      <div class="flex items-center gap-2 py-4 hidden">
        <img :src="rhombus" alt="icon" />
        <div class="text-center">
          You'll have 2 weeks to see how Noom uses psychology to create lasting
          results.
        </div>
        <img :src="rhombus" alt="icon" />
      </div>
    </div>
  </MobileView>
</template>
