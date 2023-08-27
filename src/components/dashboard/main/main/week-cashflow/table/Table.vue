<template>
    <div class="overflow-auto w-full space-y-2">
        <table class="table">
            <thead>
                <tr class="rounded">
                    <th class="text-gray-600 font-semibold p-2">Description</th>
                    <th v-for="(week, index) in weeks" :key="week.week" v-show="expanded || index < 2"
                        class="text-gray-600 font-semibold p-2 whitespace-nowrap"
                        :title="formatDates(week.startDate, week.endDate)">
                        Week-{{ week.week }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <TitleRow>Inflows:</TitleRow>
                <tr v-for="source in visibleInflowSources" :key="source" class="text-sm text-gray-600">
                    <td class="pl-4">{{ source }}</td>
                    <td v-for="(week, index) in weeks" :key="week.week" v-show="expanded || index < 2"
                        class="p-[0.58rem] whitespace-nowrap">
                        {{ formatCurrency(findAmount(week.inflow, source)) }}
                    </td>
                </tr>
                <tr v-for="source in hiddenInflowSources" :key="source" v-show="expanded" class="text-sm text-gray-600">
                    <td class="pl-4">{{ source }}</td>
                    <td v-for="(week, index) in weeks" :key="week.week" v-show="expanded || index < 2"
                        class="p-[0.58rem] whitespace-nowrap">
                        {{ formatCurrency(findAmount(week.inflow, source)) }}
                    </td>
                </tr>

                <tr v-if="!expanded" class="text-sm text-gray-600">
                    <td class="pl-4 whitespace-nowrap">Other Inflows</td>
                    <td v-for="(week, index) in weeks" :key="week.week" v-show="index < 2"
                        class="p-[0.58rem] whitespace-nowrap">
                        {{ formatCurrency(getHiddenTotal(week.inflow, hiddenInflowSources)) }}
                    </td>
                </tr>

                <TitleRow>Outflows:</TitleRow>
                <tr v-for="source in visibleOutflowSources" :key="source" class="text-sm text-gray-600">
                    <td class="pl-4">{{ source }}</td>
                    <td v-for="(week, index) in weeks" :key="week.week" v-show="expanded ||
                        index < 2" class="p-[0.58rem] whitespace-nowrap">
                        {{ formatCurrency(findAmount(week.outflow, source)) }}
                    </td>
                </tr>
                <tr v-for="source in hiddenOutflowSources" :key="source" v-show="expanded" class="text-sm text-gray-600">
                    <td class="pl-4">{{ source }}</td>
                    <td v-for="(week, index) in weeks" :key="week.week" v-show="expanded || index < 2"
                        class="p-[0.58rem] whitespace-nowrap">
                        {{ formatCurrency(findAmount(week.outflow, source)) }}
                    </td>
                </tr>

                <tr v-if="!expanded" class="text-sm text-gray-600">
                    <td class="pl-4 whitespace-nowrap">Other Outflows</td>
                    <td v-for="(week, index) in weeks" :key="week.week" v-show="index < 2"
                        class="p-[0.58rem] whitespace-nowrap">
                        {{ formatCurrency(getHiddenTotal(week.outflow, hiddenOutflowSources)) }}
                    </td>
                </tr>
                <tr>
                    <td class="text-gray-600 font-semibold p-2">Net:</td>
                    <td v-for="(week, index) in weeks" :key="week.week" v-show="expanded ||
                        index < 2" class="p-[0.58rem] whitespace-nowrap text-sm font-medium">
                        {{ formatCurrency(week.net) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import cashflowData from '../cashflowData.json';
import TitleRow from './TitleRow.vue';

interface InflowOutflow {
    source: string;
    amount: number;
}
interface Week {
    week: number;
    startDate: string;
    endDate: string;
    inflow: InflowOutflow[];
    outflow: InflowOutflow[];
    net: number;
}

const props = defineProps<{ expanded: boolean }>()

const weeks = ref<Week[]>(cashflowData.weeks);
const inflowSources = computed(() => [...new Set(weeks.value.flatMap((week: Week) => week.inflow.map((item: InflowOutflow) => item.source)))]);
const outflowSources = computed(() => [...new Set(weeks.value.flatMap((week: Week) => week.outflow.map((item: InflowOutflow) => item.source)))]);
const visibleInflowSources = computed(() => inflowSources.value.slice(0, 3))
const hiddenInflowSources = computed(() => inflowSources.value.slice(3))
const visibleOutflowSources = computed(() => outflowSources.value.slice(0, 3))
const hiddenOutflowSources = computed(() => outflowSources.value.slice(3))
const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
const findAmount = (array: InflowOutflow[], source: string) => {
    const item = array.find((item: InflowOutflow) => item.source === source);
    return item ? item.amount : 0;
};
const getHiddenTotal = (array: InflowOutflow[], sources: string[]) => {
    return array
        .filter((item: InflowOutflow) => sources.includes(item.source))
        .reduce((total: number, item: InflowOutflow) => total + item.amount, 0);
};
const formatDates = (startDate: string, endDate: string) => {
    const options: any = { month: 'short', day: 'numeric' };
    const start = new Date(startDate).toLocaleDateString('en-US', options);
    const end = new Date(endDate).toLocaleDateString('en-US', options);
    return `${start} - ${end}`;
};

onMounted(async () => {
    try {
        const response = await axios.get('/api/week-cashflow.json');
        weeks.value = response.data.weeks;
    } catch (error) {
        console.error(error);
    }
});
</script>


<style scoped>
.bold {
    font-weight: bold;
}

.card {
    max-width: 700px;
    margin: auto;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    overflow-x: auto;
}

.card-header {
    background-color: #f8f9fa;
    padding: 15px;
    font-size: 1.25em;
}

.card-body {
    padding: 15px;
}

.table {
    width: 100%;
    text-align: right;
}

.table th:first-child,
.table td:first-child {
    text-align: left;
}

.table tr:not(.section-header):nth-child(odd) {
    background-color: rgb(243 244 246);
}

.table tr:not(.section-header):nth-child(even) {
    background-color: #ffffff;
}

.font-bold {
    font-weight: bold;
}

.pl-4 {
    padding-left: 1em;
}

.btn {
    padding: 10px 20px;
    font-size: 1em;
    border-radius: 5px;
    color: #fff;
    background-color: #007bff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #0056b3;
}

.btn:active {
    background-color: #003d80;
}

.btn:focus {
    outline: none;
}
</style>
