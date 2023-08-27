<template>
    <DBLayout>
        <div class="py-10 lg:py-0"></div>
        <div :class='["max-w-6xl mx-auto space-y-10 p-4 lg:p-8",]'>
            <BalanceSheet />
        </div>
    </DBLayout>
</template>
<script lang="ts" setup>
import DBLayout from '../../components/shared/dashboard-layout/DBLayout.vue';
import BalanceSheet from '../../components/dxcx_individual/financial-statement/BalanceSheet.vue';
</script>