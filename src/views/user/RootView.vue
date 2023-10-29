<template>
    <Header />
    <main>
        <RouterView />
    </main>
    <KraalAiFooter theme=""/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '../../components/shared/header/HeaderSimplified.vue';
import KraalAiFooter from '../../components/shared/footer/KraalAiFooter.vue';
</script>

