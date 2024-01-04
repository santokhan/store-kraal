<template>
    <div class="min-h-screen bg-[#343541]">
        <div class="flex justify-between items-center border-b border-gray-500 px-4 py-2">
            <BackButton />
        </div>
        <div class="max-w-screen-xl mx-auto w-full px-4 text-noom-text-900">
            <div class="w-full flex flex-wrap lg:flex-nowrap py-12 gap-5 items-start">
                <div class="w-full lg:w-1/2 space-y-5">
                    <Company />
                    <PaymentStatusCard />
                </div>
                <div class="w-full lg:w-1/2 space-y-5">
                    <Admin />
                    <Notifications />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PaymentStatusCard from '../../blocks/payment-status-card/PaymentStatusCard.vue';
import Admin from '../../blocks/user/profile/Admin.vue';
import Company from "../../blocks/user/profile/Company.vue";
import Notifications from "../../blocks/user/notifications/Notifications.vue";
import BackButton from "../../components/button/BackButton.vue";
</script>
