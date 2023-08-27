<template>
    <DashboardCardHeader>
        <RouterLink
            class="w-full flex items-center justify-between gap-2 text-gray-400 hover:text-kraal-blue-500 focus:text-kraal-blue-600 transition-colors ease-in text-lg font-medium"
            to="/cashflow">13-Week Cashflow
            <Link class="w-4 h-4" />
        </RouterLink>
    </DashboardCardHeader>

    <CashFlowTable :expanded="expanded" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import axios from 'axios';
// import { computed, onMounted } from 'vue';
// import TitleRow from './table/TitleRow.vue';
// import cashflowData from './cashflowData.json';
import CardTitle from '../top/CardTitle.vue';
import CardTitleBox from '../../../../shared/dashboard/card/CardTitleBox.vue';
import { RouterLink } from 'vue-router';
import Link from '../../../../icons/link.vue';
import CashFlowTable from './table/Table.vue';
import DashboardCardHeader from '../../DashboardCardHeader.vue';

// interface InflowOutflow {
//     source: string;
//     amount: number;
// }
// interface Week {
//     week: number;
//     startDate: string;
//     endDate: string;
//     inflow: InflowOutflow[];
//     outflow: InflowOutflow[];
//     net: number;
// }

// const weeks = ref<Week[]>(cashflowData.weeks);

const expanded = ref<boolean>(false);
function toggleExpanded() { expanded.value = !expanded.value }

// const inflowSources = computed(() => [...new Set(weeks.value.flatMap((week: Week) => week.inflow.map((item: InflowOutflow) => item.source)))]);
// const outflowSources = computed(() => [...new Set(weeks.value.flatMap((week: Week) => week.outflow.map((item: InflowOutflow) => item.source)))]);
// const visibleInflowSources = computed(() => inflowSources.value.slice(0, 3))
// const hiddenInflowSources = computed(() => inflowSources.value.slice(3))
// const visibleOutflowSources = computed(() => outflowSources.value.slice(0, 3))
// const hiddenOutflowSources = computed(() => outflowSources.value.slice(3))
// const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
// const findAmount = (array: InflowOutflow[], source: string) => {
//     const item = array.find((item: InflowOutflow) => item.source === source);
//     return item ? item.amount : 0;
// };
// const getHiddenTotal = (array: InflowOutflow[], sources: string[]) => {
//     return array
//         .filter((item: InflowOutflow) => sources.includes(item.source))
//         .reduce((total: number, item: InflowOutflow) => total + item.amount, 0);
// };
// const formatDates = (startDate: string, endDate: string) => {
//     const options: any = { month: 'short', day: 'numeric' };
//     const start = new Date(startDate).toLocaleDateString('en-US', options);
//     const end = new Date(endDate).toLocaleDateString('en-US', options);
//     return `${start} - ${end}`;
// };


// onMounted(async () => {
//     try {
//         const response = await axios.get('/api/week-cashflow.json');
//         weeks.value = response.data.weeks;
//     } catch (error) {
//         console.error(error);
//     }
// });

// COMMENTS NOTES
// fetching the data from two sources - initially from the JSON file and then from the
// API. You might want to remove the JSON import (and the initial weeks value) when
// getting the data from the API.
// Also, ensure that the types defined (InflowOutflow and Week) match with the data
// structure you're receiving from the API.
// Do npm install axios. You'll also want to install the type definitions for axios with
// npm install @types/axios.
</script>


<style scoped>
.bold {
    font-weight: bold;
}

.card {
    max-width: 800px;
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

