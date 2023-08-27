<template>
  <FinancialReport v-if="profitLoss" :title="profitLoss.title" :data="profitLoss.data" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import FinancialReport from './FinancialReport.vue';

const profitLoss = ref<any>(null);

async function apiRequest() {
  const API_URL = "/api/profit-loss-statement.json"
  const response = await fetch(API_URL);
  profitLoss.value = await response.json();
}
onMounted(apiRequest);
</script>