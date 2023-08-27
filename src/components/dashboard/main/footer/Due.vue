<template>
  <DashboardCardHeader>
    <RouterLink to="/due" class="w-full flex items-center justify-between gap-2 text-gray-400 hover:text-kraal-blue-500">
      <CardTitle>Due Next 2 Weeks</CardTitle>
      <Link class="w-4 h-4" />
    </RouterLink>
  </DashboardCardHeader>

  <hr>
  <DueTable :dueData="dueData.slice(0, 7)" />
</template>

<script lang="ts" setup>
import CardTitle from "../main/top/CardTitle.vue";
import { RouterLink } from "vue-router";
import Link from "../../../icons/link.vue";
import DueTable from "./DueTable.vue";
import { onMounted, ref } from "vue";
import dueAPiRequest, { Due } from "./dueAPIRequest";
import DashboardCardHeader from "../DashboardCardHeader.vue";


const dueData = ref<Due[]>([]);

onMounted(() => {
  dueAPiRequest(data => { dueData.value = data })
})
</script>
