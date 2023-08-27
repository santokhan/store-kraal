<template>
    <div class="bg-white px-6 py-4 w-full h-full max-w-lg rounded-lg border shadow-sm space-y-1">
        <div class="font-medium text-gray-400 sm:text-lg">Cash Flow Statement</div>
        <!-- Cash flows from Operating Activities Section -->
        <div v-for="(item, index) in activitiesWithTotal" :key="index" class="py-2">
            <TogglerTable :tableData="item" />
        </div>
        <!-- Net increase (decrease) in cash during the period -->
        <div class="py-2">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start">Net increase (decrease) in cash during the period</th>
                        <th class="font-medium text-end">$92,000</th>
                    </tr>
                </thead>
            </table>
        </div>
        <!-- Cash at the beginning of the period -->
        <div class="py-2">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start">Cash at the beginning of the {month/year/period}</th>
                        <th class="font-medium text-end">$101,000</th>
                    </tr>
                </thead>
            </table>
        </div>
        <!-- Cash at the end of the period -->
        <div class="py-2">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start">Cash at the end of the {month/year/period}</th>
                        <th class="font-medium text-end">$193,000</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { activities } from "./cashFlowActivities"
import TogglerTable from "../shared/table/TogglerTable.vue"
import { calculateTotal } from "../pl-with-ts/tableData";

const activitiesWithTotal = calculateTotal(activities)
</script>