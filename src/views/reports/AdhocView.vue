<template>
    <DBLayout>
        <div class="lg:py-5"></div>
        <div class="max-w-6xl mx-4 lg:mx-auto space-y-5">
            <PeriodOrCustom />
            <ProfitLossStatement />
        </div>
        <div class="py-10"></div>
    </DBLayout>
</template>
  
<script lang="ts" setup>
import ProfitLossStatement from "../../components/dxcx_individual/financial-statement/ProfitLossStatement.vue";
import PeriodOrCustom from "../../components/report/period-or-custom/PeriodOrCustom.vue";
import DBLayout from "../../components/shared/dashboard-layout/DBLayout.vue";
</script>
  