<template>
    <div class="untitled-serif">
        <HeaderSimplified class="bg-[#2463eb0a]" to="/" />
        <div class="bg-kraal-blue-500 relative">
            <div class="max-w-screen-xl mx-auto px-8 py-14 lg:py-16 relative z-5" data-title="banner">
                <div class="max-w-4xl space-y-3 lg:space-y-6 drop-shadow">
                    <p class="text-4xl lg:text-7xl text-white m-0">Transform your financial operations with KraalAI</p>
                    <p class="lg:text-2xl font-medium text-white">Experience the future of AI in business</p>
                </div>
            </div>
        </div>
        <div class="max-w-screen-xl mx-auto px-4 py-8 lg:py-16 flex flex-wrap lg:flex-nowrap text-blue-950">
            <div class="max-w-sm lg:pr-8 space-y-6 lg:space-y-8 px-4">
                <h3 class="text-2xl lg:text-4xl font-medium">Kraal works across industries</h3>
            </div>
            <BusinessForm />
        </div>
        <BusinessFooter />
    </div>
</template>

<script setup lang="ts">
import HeaderSimplified from '../../shared/header/HeaderSimplified.vue';
import BusinessForm from './BusinessForm.vue';
import BusinessFooter from './BusinessFooter.vue';
</script>
