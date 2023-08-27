<template>
    <FinancialReport v-if="balanceSheet" :title="balanceSheet.title" :data="balanceSheet.data" />
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import FinancialReport from './FinancialReport.vue'

const balanceSheet = ref<any>(null);
onMounted(async () => {
    const response = await fetch('/api/balance-sheet.json');
    balanceSheet.value = await response.json();
});
</script>