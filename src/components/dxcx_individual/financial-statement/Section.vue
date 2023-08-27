<template>
    <div class="py-2">
        <table class="w-full">
            <thead>
                <tr class="text-start text-slate-800">
                    <th class="font-medium text-start">
                        {{ title }}
                    </th>
                    <th class="font-medium text-end">{{ totalAmount }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-start text-sm" v-for="(item, index) in items" :key="index">
                    <td class="text-sm text-slate-600 lg:text-base">
                        <div class="flex gap-1 items-center py-1 ml-3">
                            <div :class="`h-3 w-3 rounded-full ${item.color}`"></div>
                            {{ item.label }}
                        </div>
                    </td>
                    <td class="flex gap-8 lg:gap-12 justify-end font-medium text-gray-600 py-[6px]">{{ item.amount }}</td>
                    <!-- <td class="flex gap-8 lg:gap-12 justify-end font-medium text-gray-600 py-[6px]">{{ item.amount || currency() }}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

interface ReportItem {
    label: string
    amount: number
    color: string
}

export default defineComponent({
    name: 'Section',
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array as () => ReportItem[],
            required: true,
        },
    },
    computed: {
        totalAmount(): string {
            const total = this.items.reduce((sum, item) => sum + item.amount, 0);
            return total.toLocaleString(undefined, { style: '()', currency: 'USD' });
        },
    },
    filters: {
        currency(value: number): string {
            return value.toLocaleString(undefined, { style: 'currency', currency: 'USD' });
        },
    },
})
</script>