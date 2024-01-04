<template>
    <div v-if="adminData" class="w-full text-gray-100 rounded-lg border border-white/30 p-4 lg:p-6 space-y-3 lg:space-y-4">
        <div class="font-semibold">Admin</div>
        <ul class="space-y-3 lg:space-y-4">
            <li v-for="(item, index) in serverData" :key="index" class="space-y-1">
                <dt class="capitalize text-sm+ font-semibold+">{{ index }}</dt>
                <dd class="font-medium text-sm+">{{ item }}</dd>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const serverData = {
    name: "Alex Curren",
    email: "alex@mail.com",
    phone: "+8801718787756",
};

const adminData = ref<typeof serverData | null>(serverData);

onMounted(() => {
    function getData() {
        const url = "url";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                adminData.value = data;
            })
            .catch(err => {
                console.log(err);
            })
    }
    // getData()
})
</script>

<style scoped></style>