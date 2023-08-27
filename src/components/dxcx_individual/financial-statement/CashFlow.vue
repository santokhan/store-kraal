<template>
  <FinancialReport v-if="cashFlow" :title="cashFlow.title" :data="cashFlow.data" />
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import FinancialReport from './FinancialReport.vue';

const cashFlow = ref<any>(null);
onMounted(async () => {
  const response = await fetch('/api/cash-flow.json');
  cashFlow.value = await response.json();
});
</script>