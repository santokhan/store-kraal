<template>
  <DashboardCardHeader class="justify-between">
    <!-- PL | CF | BS -->
    <div class="font-bold text-gray-400 sm:text-lg flex items-center gap-5">
      <template v-for="item in statementLinks">
        <RouterLink :to="item.url"
          class="hover:underline hover:text-kraal-blue-500 transition-colors ease-in-out text-base font-semibold">
          {{ item.name }}
        </RouterLink>
        <span class="last:hidden text-base">|</span>
      </template>
    </div>


    <!-- [Today] button -->
    <div class="flex items-center gap-2">
      <DatePicker :handleFilterForm="props.handleFilterForm" />

      <RouterLink to="/statement" :class='[
        "rounded-lg w-8 h-8 flex justify-center items-center border",
        "bg-transparent text-gray-500",
        "hover:border-kraal-blue-500 hover:text-kraal-blue-500",
        "focus:border-kraal-blue-500 focus:text-kraal-blue-500"
      ]'>
        <Link class="w-4 h-4" />
      </RouterLink>
    </div>
  </DashboardCardHeader>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import DatePicker from './date-picker/DatePickerr.vue'
import CardTitleBox from "../../../../shared/dashboard/card/CardTitleBox.vue";
import Link from "../../../../icons/link.vue";
import { statementLinks } from './statementLinks'
import DashboardCardHeader from "../../DashboardCardHeader.vue";

// must have these props
const props = defineProps<{ handleFilterForm: (date: string) => void }>()
</script>

<style scoped>
.btn {
  background: #f1f5ff;
  color: #00246e;
  font-weight: 600;
  border: none;
}

.btn:hover {
  background: #f1f5ff;
}
</style>