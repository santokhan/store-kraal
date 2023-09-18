<template>
    <button @click="connect">
        Connect Quickbooks
    </button>
    <button @click="skip">
        Skip
    </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import api from "../kraal-api/azureAPI";

const router = useRouter();

async function connect() {
    const url = await api.quickbooks.getAuthorizationUrl();
    window.location.href = url;
}

function skip() {
    router.push('/kraalai')
}
</script>