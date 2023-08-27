<template>
    <DashboardHeader />
    <div class="flex bg-slate-50">
        <SideBarBlue />

        <!-- Dashboard main container with margin and full width -->
        <div class="w-full lg:ml-[272px] mt-20 overflow-auto py-12">
            <div class="w-full max-w-screen-lg mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
                <!-- <MainContainer /> -->
                <Chart />
                <Due />
                <WeekCashFlow />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import MainContainer from '../components/dashboard/main/main/MainContainer.vue';
import SideBarBlue from "../components/dashboard/sidebar-blue/SideBarBlue.vue";
import Chart from "../components/dashboard/main/main/chart/Chart.vue";
import WeekCashFlow from "../components/dashboard/main/main/week-cashflow/WeekCashFlow.vue";
import Due from "../components/dashboard/main/footer/Due.vue";
import DashboardHeader from '../components/shared/header/DashboardHeader.vue';
</script>

<style scoped>
.dashboard-topbar {
    width: calc(100vw - 272px);
}
</style>
  
  
  