<template>
    <Layout>
        <div class="max-w-6xl mx-auto bg-white rounded-xl px-4 lg:px-8 pb-4 my-10">
            <DashboardCardHeader>
                <h3 class="font-medium text-gray-400 text-xl group-hover:text-kraal-blue-500">Due Next 2 Weeks</h3>
            </DashboardCardHeader>
            <hr>
            <DueTable :dueData="dueData" />
        </div>
    </Layout>
</template>
  
<script lang="ts" setup>
import Layout from "../../components/shared/dashboard-layout/DBLayout.vue";
import { onMounted, ref } from "vue";
import dueAPiRequest, { Due } from "../../components/dashboard/main/footer/dueAPIRequest";
import DueTable from "../../components/dashboard/main/footer/DueTable.vue";
import DashboardCardHeader from "../../components/dashboard/main/DashboardCardHeader.vue";

const dueData = ref<Due[]>([])

onMounted(() => {
    dueAPiRequest(data => {
        dueData.value = data
    })
})
</script>
  