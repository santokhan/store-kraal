<template>
    <FinancialReport v-if="balanceSheet" :title="balanceSheet.title" :data="balanceSheet.data" />
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import FinancialReport from './FinancialReport.vue'

const balanceSheet = ref<any>(null);
onMounted(async () => {
    // Fetch the data from an API or load it from local data.
    // This is a placeholder. Replace this with your actual data loading logic.
    const response = await fetch('/api/cash-flow.json');
    balanceSheet.value = await response.json();
});
</script>