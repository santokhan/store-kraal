<template>
    <Header />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '../../components/shared/header/HeaderSimplified.vue';
import Footer from '../../components/form/business/BusinessFooter.vue';
</script>

