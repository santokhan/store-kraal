<template>
    <DBLayout>
        <div class="lg:py-5"></div>

        <div class="max-w-6xl mx-4 lg:mx-auto space-y-5">
            <div class="bg-white text-gray-600 border rounded-xl px-4 lg:px-6">
                <form
                    class="flex flex-col lg:flex-row gap-3 lg:gap-5 items-start lg:items-center rounded-xl drop transition-transform ease-in-out px-2 py-6">
                    <label for="datePicker"><span class="font-bold whitespace-nowrap">Filter by date</span></label>
                    <div class="flex items-center gap-2 lg:gap-5">
                        <div class="px-1">From</div>
                        <div class="w-full flex items-center gap-2">
                            <input type="date" id="datePicker" required
                                class="w-36 lg:w-44 border px-2 p-1 rounded-lg bg-gray-100 focus:outline-none focus:border focus:border-kraal-blue-500">
                        </div>
                    </div>
                    <div class="flex items-center gap-2 lg:gap-5">
                        <div class="px-1">To</div>
                        <div class="flex items-center gap-5">
                            <input type="date" id="datePicker" required
                                class="w-36 lg:w-44 border px-2 p-1 rounded-lg bg-gray-100 focus:outline-none focus:border focus:border-kraal-blue-500">
                        </div>
                    </div>
                    <FilterSubmit/>
                </form>
            </div>

            <section v-if="reports_data"  class="bg-white text-gray-600 border rounded-xl px-4 lg:px-6 py-4 overflow-auto">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="w-3/12 lg:w-1/12 text-start p-3">ID</th>
                            <th class="w-full text-start p-3">Name</th>
                            <th class="w-full lg:w-3/12 text-start p-3">Icon</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(report, reportIndex) in reports_data" :key="reportIndex">
                            <td class="text-gray-600 p-3 whitespace-nowrap">{{ report.id }}</td>
                            <td class="text-gray-600 p-3 whitespace-nowrap">{{ report.name }}</td>
                            <td class="text-gray-600 p-3 whitespace-nowrap">{{ report.icon }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <ProfitLossStatement/>
        </div>

        <div class="py-10"></div>
    </DBLayout>
</template>
  
<script lang="ts" setup>
import ProfitLossStatement from "../components/dxcx_individual/financial-statement/ProfitLossStatement.vue";
// import UnderConstruction from "../components/shared/UnderConstruction.vue";
import DBLayout from "../components/shared/dashboard-layout/DBLayout.vue";
import FilterSubmit from "../components/shared/dashboard/card/FilterSubmit.vue";
import { useRoute } from 'vue-router'

const route = useRoute();
const path = route.path;

interface TReports {
    id: number;
    name: string;
    icon: string;
}

const reports_data: TReports[] = [
    { id: 1, name: 'Profit & Loss Statement', icon: ':bar_chart:' },
    { id: 2, name: 'Balance Sheets', icon: ':chart_with_upwards_trend:' },
    { id: 3, name: 'Cash Flow Statement', icon: ':moneybag:' },
    { id: 4, name: '13-Week Cash Flow', icon: ':heavy_dollar_sign:' },
    { id: 5, name: 'Key Performance Indicators', icon: ':chart_with_upwards_trend:' },
    { id: 6, name: 'Baseline Report', icon: ':bar_chart:' },
    { id: 7, name: 'Reporting Package', icon: ':package:' },
    { id: 8, name: 'Adhoc Reports', icon: ':mag:' }
]
</script>
  