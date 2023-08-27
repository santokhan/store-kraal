<template>
    <DBLayout>
        <UnderConstruction>Welcome to {{ path }} page</UnderConstruction>
    </DBLayout>
</template>

<script lang="ts" setup>
import UnderConstruction from "../components/shared/UnderConstruction.vue";
import DBLayout from "../components/shared/dashboard-layout/DBLayout.vue";
import { useRoute } from 'vue-router'

const route = useRoute();
const path = route.path;
</script>
