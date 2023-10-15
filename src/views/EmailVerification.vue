<template>
    <p>Make sure to verify your email</p>
    <button @click="sendVerificationEmail">Resend verification email</button>
    <p>{{ sentMessage }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import * as firebase from "../firebase/services";

const sentMessage = ref("");

async function sendVerificationEmail() {
    const success = await firebase.sendEmailVerification();
    sentMessage.value = success ? "Email sent successfully" : "Could not send email";
}
</script>