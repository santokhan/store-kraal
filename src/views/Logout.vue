<template></template>
  
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import logout from '../components/form/logout/logout';
import { onBeforeMount } from 'vue';

const router = useRouter();
// This `"/logout"` route will used to log out the current user
onBeforeMount(() => {
    logout(() => {
        // redirect to home after logged out
        router.replace("/");
    });
})
</script>
  