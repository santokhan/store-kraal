<script lang="ts" setup>
import Cnn from "../../../../icons/cnn.vue";
import Today from "../../../../icons/today.vue";
import Shape from "../../../../icons/shape.vue";
import HouseKeeping from "../../../../icons/house-keeping.vue";
import NewYorkTimes from "../../../../icons/new-york-times.vue";
</script>

<template>
  <div class="pt-4">
    <div
      class="uppercase text-center mt-4 mb-2 font-semibold text-base text-noom-stone-500"
    >
      Kraal has been featured in
    </div>
    <div class="flex flex-wrap justify-center hidden">
      <HouseKeeping class="py-4 w-auto h-[52px] mx-auto" />
      <Cnn class="py-4 w-auto h-[52px] mx-auto" />
    </div>
    <div class="flex flex-wrap justify-center">
      <Today class="py-4 w-auto h-[52px] mx-auto" />
      <Shape class="py-4 w-auto h-[52px] mx-auto" />
    </div>
    <div class="flex flex-wrap justify-center">
      <NewYorkTimes class="py-4 w-auto h-[52px] mx-auto" />
    </div>
  </div>
</template>
