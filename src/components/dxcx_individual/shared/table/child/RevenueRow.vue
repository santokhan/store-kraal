<!-- 
I've created separate components for the revenue row, expense row, and total row. 
The data for each section is stored in data properties, and computed properties 
are used to calculate the dynamic values. The v-show directive is used to toggle 
the visibility of the revenue and expense sections.
Note that this is just a starting point, and you can further optimize and customize 
the code based on your specific requirements.
-->

<template>
    <tr class="text-start text-sm">
        <td class="text-sm text-slate-600 lg:text-base">
            <div class="flex gap-2 items-center py-1 ml-3">
                <div :class="['h-3 w-3 rounded-full']" :style="{ backgroundColor: props.revenue.color }"></div>
                {{ props.revenue.label }}
            </div>
        </td>
        <td class="flex gap-8 lg:gap-12 justify-end font-medium text-gray-600 py-[6px]">{{ commaSeparatedNum }}</td>
    </tr>
</template>

<script lang="ts" setup>
import { Rows } from '../../../pl-with-ts/tableData';

const props = defineProps<{ revenue: Rows }>()

// Convert a number to a string with commas taking into account decimal point
function numberWithCommasDecimal(x: number): string {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

let commaSeparatedNum = props.revenue.amount ? `$${numberWithCommasDecimal(props.revenue.amount)}` : "-"
</script>