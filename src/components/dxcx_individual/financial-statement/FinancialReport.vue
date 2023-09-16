<template>
    <div class="bg-white px-6 py-4 w-full h-full rounded-lg border shadow-sm space-y-1">
        <div class="flex justify-between items-center mb-2">
            <div class="font-medium text-gray-400 sm:text-lg">{{ props.title }}</div>
            <div class="flex gap-3 items-center">
                <RouterLink to="/kraalai" title="KraalAI">
                    <User class="w-6 hover:text-kraal-blue-500"/>
                </RouterLink>
                <RouterLink to="/download-only-report" title="Download Report">
                    <Download class="hover:text-kraal-blue-500"/>
                </RouterLink>

            </div>
        </div>

        <div class="py-2" v-for="(section, i) in data" :key="i">
            <table class="w-full" v-if="section">
                <thead>
                    <tr class="text-start text-slate-800">
                        <th class="font-medium text-start">
                            <button type="button" class="rounded-lg px-2 py-1 border flex items-center gap-2"
                                @click="section.isOpen = !section.isOpen" title="Button">
                                <span class="leading-[1]">{{ section.sectionTitle }}</span>
                                <svg class="" :class="section.isOpen ? 'rotate-90' : 'rotate-0'" width="6" height="10"
                                    viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </th>
                        <th class="font-medium text-end">{{ totalAmount(section.items) }}</th>
                    </tr>
                </thead>
                <tbody v-show="section.isOpen">
                    <tr class="text-start text-sm" v-for="(item, index) in section.items" :key="index">
                        <td class="text-sm text-slate-600 lg:text-base">
                            <div class="flex gap-1 items-center py-1 ml-3">
                                <div :class="`h-3 w-3 rounded-full ${item.color}`"></div>
                                {{ item.label }}
                            </div>
                        </td>
                        <td class="flex gap-8 lg:gap-12 justify-end font-medium text-gray-600 py-[6px]">{{ item.amount }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- pre generate some colors -->
    <span :class='["bg-green-500"]'></span>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Download from '../../icons/download.vue';
import User from '../../icons/user.vue';
import { RouterLink } from 'vue-router';

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

const data = ref<Section[]>([])
const props = defineProps<{ title: string; data: Section[] }>()

function totalAmount(array: SectionItem[]) {
    let total = 0;
    array.forEach(item => {
        total += parseFloat(item.amount.replace(/[^0-9.-]+/g, ""));
    });
    return `$${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}

onMounted(() => {
    data.value = props.data.map(e => { e.isOpen = true; return e; })
})
</script>