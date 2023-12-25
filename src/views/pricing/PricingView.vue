<template>
    <Header></Header>
    <section class="max-w-screen-xl mx-auto px-4">
        <div class="w-full flex flex-wrap justify-center gap-8 py-8">
            <PricingBasic />
            <PricingStandard />
        </div>
    </section>
</template>

<script setup lang="ts">
import Header from "../../components/shared/header/HeaderSimplified.vue";
import PricingBasic from "../../ui/pricing-card/PricingBasic.vue";
import PricingStandard from "../../ui/pricing-card/PricingStandard.vue";
</script>

<style scoped></style>