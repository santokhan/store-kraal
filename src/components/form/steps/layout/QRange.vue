<script setup lang="ts">
const { setData, value }:any = defineProps({
  setData: Function,
  value: Number,
  low: String,
  high: String,
});

function updateData(item: string | number) {
  setData(item);
}
</script>

<template>
  <div>
    <div class="flex justify-center pt-4">
      <div class="inline-flex overflow-hidden gap-[5px]">
        <div v-for="(item, i) of [1, 2, 3, 4, 5]" :key="i">
          <button
            type="button"
            v-if="value === item"
            @click="
              () => {
                updateData(item);
              }
            "
            :class="
              'text-lg font-normal text-center capitalize-first ' +
              'transition-colors ease-out duration-200 ' +
              'w-[72px] h-[60px] px-4 group rounded-lg border-secondary-500 ' +
              'bg-kraal-blue-500 text-white'
            "
          >
            {{ item }}
          </button>
          <!--  -->
          <button
            type="button"
            v-else
            @click="
              () => {
                updateData(item);
              }
            "
            :class="
              'text-lg font-normal text-center capitalize-first text-noom-text-900 ' +
              'transition-colors ease-out duration-200 ' +
              'w-[72px] h-[60px] px-4 group rounded-lg border-secondary-500 ' +
              'bg-secondary-500 hover:bg-secondary-700 focus:bg-kraal-blue-500 focus:text-white '
            "
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex overflow-hidden gap-[5px] justify-between max-w-[372px] mx-auto mt-1 text-noom-stone-500"
    >
      <div class="capitalize">{{ low ? low : "Very Unhappy" }}</div>
      <div class="capitalize">{{ high ? high : "Very Happy" }}</div>
    </div>
  </div>
</template>
