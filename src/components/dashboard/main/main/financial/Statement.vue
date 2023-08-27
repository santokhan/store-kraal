<template>
    <SectionTop :handleFilterForm="handleFilterForm" />
    <hr>
    <div v-for="(e, i) in [cashFlow, balanceSheet, profitLoss]" :key="i" class="pt-3">
        <STable v-if="e" :title="e.title" :data="e.data" />
    </div>
</template>

  
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import SectionTop from "../top/SectionTop.vue";
import STable from './StatementTable.vue'

const formattedDate = new Date().toLocaleDateString('en-US').replaceAll("/", "-");

const cashFlow = ref<any>(null)
const balanceSheet = ref<any>(null)
const profitLoss = ref<any>(null)
const date = ref<string>(formattedDate)

async function cashAPIReques() {
    const API_URL = `/api/cash-flow.json?date=${date}`
    const response = await fetch(API_URL)
    cashFlow.value = await response.json()
}
async function balanceAPIReques() {
    const API_URL = `/api/balance-sheet.json?date=${date}`
    const response = await fetch(API_URL)
    balanceSheet.value = await response.json()
}
async function profitAPIReques() {
    const API_URL = `/api/profit-loss-statement.json?date=${date}`
    const response = await fetch(API_URL)
    profitLoss.value = await response.json()
}

function fetchDate(date?: any) {
    cashAPIReques()
    balanceAPIReques()
    profitAPIReques()
}

onMounted(fetchDate)

function handleFilterForm(dateInput: string) {
    date.value = dateInput;
    // fetch again with filter data
    fetchDate();
}
</script>


<style scoped></style>