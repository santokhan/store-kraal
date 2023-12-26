<template>
    <Card>
        <PricingTitle>Basic</PricingTitle>
        <Price :amount="0" />
        <ul role="list" class="space-y-5 my-7">
            <Feature v-for="(item, index) in [...feature.available, ...feature.unavailable]" :key="index"
                :available="feature.available.includes(item)">{{ item }}</Feature>
        </ul>
        <PricingButton>Get Started</PricingButton>
    </Card>
</template>

<script setup lang="ts">
import Card from '../../components/pricing-card/Card.vue';
import PricingButton from '../../components/pricing-card/PricingButton.vue';
import PricingTitle from '../../components/pricing-card/PricingTitle.vue';
import Price from '../../components/pricing-card/Price.vue';
import Feature from '../../components/pricing-card/Feature.vue';

const feature = {
    available: [
        "Unlimited messages, interactions, and history",
        "Integration help",
    ],
    unavailable: [
        "24×7 phone & email support",
    ],
};
</script>

<style scoped></style>