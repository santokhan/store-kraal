<template>
  <DashboardCardHeader class="justify-between">
    <button :class="kpisClone.length > LEN ? 'text-kraal-blue-500' : ''"
      class="flex gap-4 items-center text-gray-400 hover:text-kraal-blue-500 font-medium text-lg" @click="sliceKPIs">
      KPI's
      <AngleDown class="w-3 h-4" :class="kpisClone.length > LEN ? 'rotate-0' : '-rotate-90'" />
    </button>

    <RouterLink to="/chart" class="text-gray-400 hover:text-kraal-blue-500">
      <Link class="w-4 h-4" />
    </RouterLink>
  </DashboardCardHeader>

  <ChartRows v-if="kpisClone.length" :data="kpisClone" />
</template>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import AngleDown from "../../../../icons/angle-down.vue";
import DashboardCardHeader from "../../DashboardCardHeader.vue";
import Link from "../../../../icons/link.vue";
import { RouterLink } from "vue-router";
import ChartRows from "./ChartRows.vue";
import { chartResponse, KPIS } from "./chartData";

// flag variable
const LEN = 5;

// stateless for response
let kpis: KPIS[] = []

// stateful for expand/collapse
const kpisClone = ref<KPIS[]>([])

// expand/collapse
function sliceKPIs() {
  if (kpisClone.value.length == LEN) {
    kpisClone.value = kpis.slice(0, kpis.length)
  } else {
    kpisClone.value = kpis.slice(0, LEN)
  }
}


onMounted(() => {
  // assign KPIS API response to `kpis` 
  chartResponse(data => {
    kpis = data;

    // slice for collapse on layout
    kpisClone.value = kpis.slice(0, LEN)
  })
})
</script>


<style scoped></style>
