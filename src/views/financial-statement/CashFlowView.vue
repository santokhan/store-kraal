<template>
  <DBLayout>
    <div :class='["max-w-6xl mx-auto p-4 lg:px-8 pb-8 bg-white my-10 rounded-xl",]'>
      <DashboardCardHeader>
        <button class="text-gray-400 flex gap-4 items-center mb-4 group" @click="toggleExpanded">
          <CardTitle class="group-hover:text-kraal-blue-500" :class="expanded === true ? 'text-kraal-blue-500' : ''">
            13-Week Cashflow</CardTitle>
          <div type="button" class="flex gap-4 items-center w-3 h-4 group-hover:text-kraal-blue-500"
            :class="expanded === true ? 'rotate-0 text-kraal-blue-500' : '-rotate-90'">
            <AngleDown class="w-full h-full" />
          </div>
        </button>
      </DashboardCardHeader>

      <TableExpanded :expanded="expanded" />
    </div>
  </DBLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TableExpanded from '../../components/dashboard/main/main/week-cashflow/table/TableExpanded.vue';
// import WeekCashFlow from '../../components/dashboard/main/main/week-cashflow/WeekCashFlow.vue';
// import CashFlow from '../../components/dxcx_individual/financial-statement/CashFlow.vue';
// import CardTitleBox from '../../components/shared/dashboard/card/CardTitleBox.vue';
import DBLayout from '../../components/shared/dashboard-layout/DBLayout.vue';
import CardTitle from '../../components/dashboard/main/main/top/CardTitle.vue';
import AngleDown from '../../components/icons/angle-down.vue';
import DashboardCardHeader from '../../components/dashboard/main/DashboardCardHeader.vue';

const expanded = ref<boolean>(true);
function toggleExpanded() { expanded.value = !expanded.value }
</script>