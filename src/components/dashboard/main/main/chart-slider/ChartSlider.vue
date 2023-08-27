<script lang="ts" setup>
import chartData from "./chartData.json";
import ChartDesc from "./ChartDesc.vue";
import ChartTitle from "./ChartTitle.vue";

interface total {
  width: number;
  height: number;
}

const total: total = {
  width: 680,
  height: 324,
};

function percentage(max: number, min: number): number {
  return (min / max) * 100;
}
</script>

<template>
  <div class="">
    <div class="flex gap-3 h-8 items-center justify-center">
      <button type="button" class="w-3 h-3 bg-gray-200 rounded-full"></button>
      <button type="button" class="w-3 h-3 bg-kraal-blue-500 rounded-full"></button>
      <button type="button" class="w-3 h-3 bg-gray-200 rounded-full"></button>
    </div>
  </div>
  <div class="w-full sm:w-auto overflow-x-auto block lg:hidden">
    <div
      class="rounded-xl text-start text-white h-[188px] sm:h-auto overflow-y-auto"
    >
      <div v-for="row of chartData" class="w-full overflow-hidden group">
        <div class="px-4 py-3 sm:py-4 relative mt-1 shadow w-full">
          <div
            class="group-hover:brightness-95 w-full h-full absolute left-0 top-0 z-10 rounded-xl overflow-hidden"
            :style="{ backgroundColor: row.colour }"
          ></div>
          <div class="w-full relative z-30">
            <ChartTitle>{{ row.title }}</ChartTitle>
            <ChartDesc>
              ${{ row.spent }} of ${{ row.average }} average spent
            </ChartDesc>
          </div>
          <div
            class="w-full h-[6px] bg-white/50 rounded mt-2 mb-1 relative z-30 shadow"
            title="range"
          >
            <div
              class="w-1/2 h-full bg[#114050] bg-white rounded"
              :style="{ width: percentage(row.average, row.spent) + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Desktop -->
  <div class="overflow-x-auto hidden lg:block my-2 h-[420px]">
    <div class="rounded-xl text-start text-white overflow-y-auto space-y-1">
      <div v-for="row of chartData" class="w-full sm:w-[460px]">
        <div
          class="w-full bg-gray-900 border rounded-xl overflow-hidden px-4 py-3 hover:brightness-95 shadow"
          :style="{
            width: '100%',
            backgroundColor: row.colour,
          }"
        >
          <div class="">
            <ChartTitle class="">{{ row.title }}</ChartTitle>
            <ChartDesc>
              ${{ row.spent }} of ${{ row.average }} average spent
            </ChartDesc>
          </div>
          <div class="w-full h-[6px] bg-white/50 rounded mt-3 mb-1">
            <div
              class="w-1/2 h-full bg[#114050] bg-white rounded"
              :style="{ width: percentage(row.average, row.spent) + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
