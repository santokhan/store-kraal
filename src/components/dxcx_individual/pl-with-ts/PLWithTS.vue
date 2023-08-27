<template>
    <div class="bg-white px-6 py-4 w-full max-w-lg rounded-lg border shadow-sm space-y-1">
        <div class="font-medium text-gray-400 sm:text-lg">Income Statement</div>
        <div v-for="(item, index) in listWithTotal" :key="index" class="py-2">
            <TogglerTable :tableData="item" />
        </div>
        <div class="py-2">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start"><span class="px-1 font-medium">Income from Operations</span></th>
                        <th class="font-medium text-end">${{ incomeFromOperations }}</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="py-2">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start">
                            <span class="px-1 font-medium">Pre Tax Income</span>
                        </th>
                        <th class="font-medium text-end" v-if="preTaxIncome">${{ preTaxIncome }}</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="py-2">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start">
                            <span class="px-1 font-medium">Income Tax</span>
                        </th>
                        <th class="font-medium text-end" v-if="incomeTax">${{ incomeTax }}</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="py-2">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start">
                            <span class="px-1 font-medium">Net Income</span>
                        </th>
                        <th class="font-medium text-end">${{ netIncome }}</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TogglerTable from '../shared/table/TogglerTable.vue';
import { list, calculateTotal } from './tableData';

const listWithTotal = calculateTotal(list);

let grossProfit = 0;
list.forEach((e) => {
    if (e.title === "Revenue") {
        return grossProfit = e.rows[0].amount - e.rows[1]?.amount
    }
})

let totalOperatingExpense = 0
listWithTotal.forEach(e => {
    if (e.title === "Operating Expense") {
        totalOperatingExpense = e.total || 0
    }
})

let totalNonOperatingExpenses = 0
listWithTotal.forEach(e => {
    if (e.title === "Non Operating Expenses") {
        totalNonOperatingExpenses = e.total || 0
    }
})

// Calculate the income from operations
const incomeFromOperations = grossProfit - totalOperatingExpense;

// Calculate the pre-tax income
const preTaxIncome = incomeFromOperations - totalNonOperatingExpenses;

// Calculate the income tax
const incomeTax = parseFloat('20,000');

// Calculate the net income
const netIncome = preTaxIncome - incomeTax;
</script>

<style scoped>
/* Add your custom styles here */
</style>

