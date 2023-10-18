<template>
    <p>You successfully verified your email address</p>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import azureAPI from "../kraal-api/azureAPI";

const router = useRouter();

callVerify();
async function callVerify() {
    await azureAPI.auth.verifyEmail();
    router.replace("/kraalai");
}

</script>