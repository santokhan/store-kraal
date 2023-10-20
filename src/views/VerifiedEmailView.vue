<template></template>

<script setup lang="ts">
import { ref } from "vue"
import { LocationQueryValue, useRoute, useRouter } from "vue-router";
import { getCurrentUser } from "vuefire";

const router = useRouter()
const route = useRoute()

async function redirect() {
    const redirect: LocationQueryValue | LocationQueryValue[] = route.query.redirect
    if (typeof redirect === 'string') {
        router.push(redirect);
    } else {
        // if redirect url not found
        router.push('/kraalai');
    }
};
redirect() 
</script>
