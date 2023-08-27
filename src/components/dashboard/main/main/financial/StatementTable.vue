<template>
    <div class="bg-white w-full h-full space-y-1">
        <div class="font-semibold text-gray-700">{{ title }}</div>

        <div class="py-0.5" v-for="(section, i) in data" v-show="i < 3">
            <table class="w-full">
                <thead>
                    <tr class="text-start text-gray-700">
                        <th colspan="2">
                            <button type="button" @click="section.isOpen = !section.isOpen"
                                class="rounded-lg py-1 w-full flex items-center justify-between gap-2 font-medium">
                                <AngleDown
                                    :class="['w-3.5 h-3.5 transition-transform ease-in-out', section.isOpen || '-rotate-90']" />
                                <div class="w-full text-start leading-[1]">{{ section.sectionTitle }}</div>
                                <div class="w-auto text-end">{{ totalAmount(section.items) }}</div>
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody v-show="section.isOpen">
                    <tr v-for="(item, index) in section.items"
                        class="text-start text-sm border-l last:border-transparent relative transition-all ease-in-out">
                        <td class="text-sm text-gray-500 lg:text-sm relative">
                            <!-- Table rows tree -->
                            <div class="border-l border-b w-3 h-4 absolute top-0 -left-[0.5px] rounded-bl-lg"></div>
                            <div class="flex gap-2 items-start py-1 ml-3">
                                <div :class="`h-3 w-3 rounded-full my-1 ${item.color}`"></div>{{ item.label }}
                            </div>
                        </td>
                        <td class="flex gap-8 lg:gap-12 justify-end font-medium text-gray-500 py-1.5">
                            {{ item.amount }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- pre generate some colors -->
    <span :class='["bg-green-500",]'></span>
</template>
  

<script lang="ts" setup>
import AngleDown from '../../../../icons/angle-down.vue';

interface SectionItem {
    label: string;
    amount: string;
    color: string;
}
interface Section {
    sectionTitle: string;
    items: SectionItem[];
    isOpen: boolean;
}

defineProps<{ title: string; data: Section[] }>()

function totalAmount(array: SectionItem[]) {
    let total = 0;
    array.forEach(item => {
        total += parseFloat(item.amount.replace(/[^0-9.-]+/g, ""));
    });
    return `$${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}
</script>