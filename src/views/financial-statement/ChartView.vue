<template>
    <DBLayout>
        <div class="max-w-6xl mx-auto px-4 lg:px-8 pb-4 bg-white my-10 rounded-xl">
            <DashboardCardHeader class="justify-between">
                <div class="flex gap-4 items-center text-gray-400 font-medium text-lg">
                    KPI's
                </div>
            </DashboardCardHeader>

            <ChartRows :data="kpis" />
            <div class="py-2"></div>
        </div>
    </DBLayout>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DBLayout from '../../components/shared/dashboard-layout/DBLayout.vue';
import ChartRows from '../../components/dashboard/main/main/chart/ChartRows.vue';
import { KPIS, chartResponse } from '../../components/dashboard/main/main/chart/chartData';
import DashboardCardHeader from '../../components/dashboard/main/DashboardCardHeader.vue';

const kpis = ref<KPIS[]>([])

onMounted(() => {
    chartResponse(data => {
        kpis.value = data;
    })
})
</script>