<template>
  <DBLayout>
    <div class="py-10 lg:py-0"></div>
    <div :class='[
      "max-w-6xl mx-auto space-y-10 p-4 lg:p-8",
    ]'>
      <ProfitLossStatement />
    </div>
  </DBLayout>
</template>

<script lang="ts" setup>
import DBLayout from '../../components/shared/dashboard-layout/DBLayout.vue';
import ProfitLossStatement from '../../components/dxcx_individual/financial-statement/ProfitLossStatement.vue';
</script>