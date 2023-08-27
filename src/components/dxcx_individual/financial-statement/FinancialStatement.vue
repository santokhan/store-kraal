<template>
    <div class="bg-white border shadow p-6 rounded-lg">
        <div class="navigation">
            <RouterLink to="/pl">PL</RouterLink> |
            <RouterLink to="/bs">BS</RouterLink> |
            <RouterLink to="/cf">CF</RouterLink>
        </div>
        <div class="border px-2 py-1 rounded flex items-center gap-4">
            Date picker
            <vue-datepicker v-model="selectedDate" @change="updateDate" />
            <!-- <span>{{ selectedDate }}</span> -->
        </div>
        <!-- <router-view :date="selectedDate"></router-view> -->
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import vueDatepicker from 'vue3-datepicker'

const selectedDate = ref<any>(new Date())
const updateDate = async () => {
    // API call goes here...
    /**
     axios.get('', {
        params: { date: selectedDate.value }
    }).then(response => {
        // update data with response.data
    })
     */

}
async function apiRequest() {
    // Fetch the data from an API or load it from local data.
    // This is a placeholder. Replace this with your actual data loading logic.
    const response = await fetch('/api/financial-statement.json');
    selectedDate.value = await response.json();
}
onMounted(apiRequest),
</script>
