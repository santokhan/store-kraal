<template>
    <DBLayout>
        <div class="py-10 lg:py-0"></div>
        <div :class='[
            "max-w-6xl mx-auto space-y-10 p-4 lg:p-8",
            "statistics-grid"
        ]'>
            <div>
                <BalanceSheet />
            </div>
            <div>
                <CashFlow />
            </div>
            <div>
                <ProfitLossStatement />
            </div>
            <div class="">
                <Card />
            </div>
        </div>
    </DBLayout>
</template>

<script lang="ts" setup>
import DBLayout from "../components/shared/dashboard-layout/DBLayout.vue";
// 
import PL from "../components/dxcx_individual/pl-with-ts/PLWithTS.vue";
import BS from "../components/dxcx_individual/pl-with-ts/PLWithTS.vue";
import CF from "../components/dxcx_individual/cash-flow/CashFlow.vue";
import Card from "../components/dxcx_individual/card/Card.vue";
// 
import CashFlow from "../components/dxcx_individual/financial-statement/CashFlow.vue";
import ProfitLossStatement from "../components/dxcx_individual/financial-statement/ProfitLossStatement.vue";
</script>
  
  
<style scoped>
@media (min-width:1024px) {
    .statistics-grid {
        columns: 2;
    }

    .statistics-grid div {
        break-inside: avoid;
    }
}
</style>