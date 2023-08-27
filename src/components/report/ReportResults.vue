<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Report Results</h2>
    <p>Report Name: {{ reportData.reportName }}</p>
    <p>Date Range: {{ reportData.dateRange }}</p>
    <!-- Display the report data here based on your requirements -->
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    reportData: {
      type: Object as () => ReportData,
      required: true,
    },
  },
});
interface ReportData {
  reportName: string;
  dateRange: string;
  // Additional report data properties...
}
</script>


<style scoped>
/* Tailwind CSS styles can be added here */
</style>