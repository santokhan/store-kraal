<template>
    <div class="text-start text-white space-y-1">
        <div v-if="props.data.length > 0" v-for="(row, i) of props.data" class="w-full">
            <div class="w-full rounded-lg overflow-hidden px-4 py-3 hover:brightness-95 shadow"
                :style="{ backgroundColor: chartColour[i] }">
                
                <div>
                    <ChartTitle>{{ row.name }}</ChartTitle>
                    <CardDesc>${{ row.target_value }} of ${{ row.actual_value }} average spent</CardDesc>
                </div>

                <div class="w-full h-[6px] bg-white/50 rounded mt-3 mb-1">
                    <div class="w-1/2 h-full bg[#114050] bg-white rounded"
                        :style="{ width: percent(row.actual_value, row.target_value) + '%' }"></div>
                </div>
                
            </div>
        </div>
    </div>
</template>

  
<script setup lang="ts">
import ChartTitle from "./ChartTitle.vue";
import CardDesc from "./CardDesc.vue";
import { KPIS, chartColour } from "./chartData";

function percent(max: number, min: number): number {
    let percent = (min / (min + max)) * 100
    return Math.round(percent)
}

const props = defineProps<{ data: KPIS[] }>()

// original API request
// const kpis = ref<KPIS[]>([])

// async function requestKPIs() {
//     await fetch('/api/kpis.json')
//         .then(res => res.json())
//         .then(data => {
//             kpis.value = data.kpi;
//         })
//         .catch(err => { console.log(err) })
// }


// onMounted(() => {
//     requestKPIs();
// })
</script>


<style scoped></style>
  