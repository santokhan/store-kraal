<template>
    <div class="max-w-screen-xl mx-auto space-y-4 py-4">
        <div class="flex justify-center">
            <Kraal class="h-8 text-kraal-blue-500" />
        </div>
        <FinancialReport v-if="profitLoss" :title="profitLoss.title" :data="profitLoss.data" />
        <div class="flex justify-end">
            <button
                class="text-white bg-kraal-blue-500 h-8 px-4 font-medium rounded-lg hover:bg-kraal-blue-600 focus:ring-4 focus:ring-kraal-blue-500"
                @click="print = true">Print</button>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue'
import FinancialReport from '../../components/dxcx_individual/financial-statement/FinancialReport.vue'
import Kraal from '../../components/icons/kraal.vue'

const profitLoss = ref<any>(null)
const print = ref<boolean>(false)

async function apiRequest() {
    const API_URL = "/api/profit-loss-statement.json"
    const response = await fetch(API_URL);
    profitLoss.value = await response.json();
}
onMounted(() => {
    apiRequest()
})

watchEffect(() => {
    if (print.value) {
        window.print()
        setTimeout(() => {
            print.value = false
        }, 3000);
    }
})
</script>