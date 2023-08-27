<template>
    <table class="w-full">
        <thead>
            <tr class="text-start text-slate-800">
                <th class="font-medium text-start pr-2">
                    <Toggler :handleToggle="() => { expand = !expand }" :state="expand">{{ props.tableData.title }}
                    </Toggler>
                </th>
                <th class="font-medium text-end pl-2">${{ commaSaperatedTotal }}</th>
            </tr>
        </thead>
        <tbody v-show="expand">
            <RevenueRow v-for="(revenue, index) in props.tableData.rows" :revenue="revenue" :key="index" />
            <TotalRow :label="'Gross Profit'" :amount="commaSaperatedTotal" />
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Toggler from './child/TTogglerButton.vue';
import RevenueRow from './child/RevenueRow.vue';
import TotalRow from './child/TotalRow.vue';
import { List } from '../../pl-with-ts/tableData';

const expand = ref<boolean>(true)

const props = defineProps<{ tableData: List }>()

// function sum() {
//     let total = props.tableData.rows.reduce((acc: number, crnt: { amount: number }) => acc + crnt.amount, 0)
//     return total;
// }

// Convert a number to a string with commas taking into account decimal point
function numberWithCommasDecimal(x: number): string {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const commaSaperatedTotal = numberWithCommasDecimal(props.tableData.total || 0)
</script>

<style scoped></style>