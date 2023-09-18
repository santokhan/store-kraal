<template>
{{ message }}
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import api from "../kraal-api/azureAPI";
import { ref } from 'vue';

let message = ref("Connecting...");

const route = useRoute();
const code = route.query.code;
const realmIdStr = route.query.realmId;

async function link() {
    if (!code || !realmIdStr || typeof code !== 'string' || typeof realmIdStr !== 'string') {
        message.value = "Invalid data";
        return;
    }
    const realmId = parseInt(realmIdStr);

    await api.quickbooks.link(code, realmId);
    message.value = "Quickbooks connected";
}
link();
</script>