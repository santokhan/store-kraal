<template>
    <DBLayout>
        <div class="max-w-6xl mx-auto px-4 lg:px-8 pb-4 bg-white my-10 rounded-xl">
            <DashboardCardHeader>
                <div class="w-full h-12 flex items-center gap-2 justify-between">
                    <!-- PL | CF | BS -->
                    <div class="font-bold text-gray-400 sm:text-lg flex items-center gap-5">
                        <template v-for="item in statementLinks">
                            <RouterLink :to="item.url"
                                class="hover:underline hover:text-kraal-blue-500 transition-colors ease-in-out text-base font-medium">
                                {{ item.name }}
                            </RouterLink>
                            <span class="last:hidden text-base">|</span>
                        </template>
                    </div>

                    <!-- Today button -->
                    <DatePickerr :handleFilterForm="props.handleFilterForm" />
                </div>
            </DashboardCardHeader>

            <div v-for="(e, i) in [cashFlow, balanceSheet, profitLoss]" :key="i">
                <StatementTable v-if="e" :title="e.title" :data="e.data" />
            </div>
        </div>
    </DBLayout>
</template>

  lkldfdsa
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import DBLayout from '../../components/shared/dashboard-layout/DBLayout.vue';
import StatementTable from '../../components/dashboard/main/main/financial/StatementTable.vue';
// import CardTitleBox from '../../components/shared/dashboard/card/CardTitleBox.vue';
import { RouterLink } from 'vue-router';
import DatePickerr from '../../components/dashboard/main/main/top/date-picker/DatePickerr.vue';
import { statementLinks } from '../../components/dashboard/main/main/top/statementLinks';
import DashboardCardHeader from '../../components/dashboard/main/DashboardCardHeader.vue';

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

// must have these props
const props = defineProps<{ handleFilterForm: (date: string) => void }>()
</script>