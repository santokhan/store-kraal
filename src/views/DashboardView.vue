<template>
    <Layout>
        <div :class="[
            'max-w-6xl mx-auto p-4 lg:p-12',
            'grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 justify-items-center items-start',
        ]">
            <DCC>
                <Chart />
            </DCC>
            <DCC>
                <WeeklyFLow />
            </DCC>
            <DCC>
                <Due />
            </DCC>
            <DCC>
                <Statement />
            </DCC>
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import DCC from '../components/dashboard/main/DashnboardCardContainer.vue';
import Due from "../components/dashboard/main/footer/Due.vue";
import Chart from "../components/dashboard/main/main/chart/Chart.vue";
import Statement from '../components/dashboard/main/main/financial/Statement.vue';
import WeeklyFLow from "../components/dashboard/main/main/week-cashflow/WeekCashFlow.vue";
import Layout from "../components/shared/dashboard-layout/DBLayout.vue";
</script>