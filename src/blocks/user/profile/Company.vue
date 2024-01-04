<template>
    <div v-if="adminData" class="w-full text-gray-100 rounded-lg border border-white/30 p-4 lg:p-6 space-y-4 lg:space-y-5">
        <div class="space-y-1">
            <h3 class="text-lg font-bold ">Company Name</h3>
            <p class=" font-medium">nuku@mail.com</p>
        </div>
        <div class="space-y-2">
            <h4 class="font-semibold  text-sm+">Plan</h4>
            <p class=" text-sm+">
                <span class="font-semibold">Simple Plan:</span> This is our starter plan that
                uses GPT 3.5 model for inference. Think of it as a low experience associate that delivers equivalent work
                output.
            </p>
        </div>
        <div class="space-y-2">
            <h4 class="font-semibold  text-sm+">Clients</h4>
            <div class="flex flex-wrap gap-3 lg:gap-4">
                <UserAvator />
                <UserAvator />
                <UserAvator />
                <UserAvator />
            </div>
        </div>
        <div class="space-y-2">
            <h4 class="font-semibold  text-sm+">Team</h4>
            <div class="flex flex-wrap gap-3 lg:gap-4">
                <UserAvator />
                <UserAvator />
                <UserAvator />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserAvator from '../../../components/profile/company/UserAvator.vue';

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