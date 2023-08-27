<script lang="ts" setup>import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bg-secondary-500 px-4 py-3 rounded-xl border border-gray-300 my-4">
        <ul class="list-disc pl-4 py-2 space-y-2">
            <li>This is an autorenewing subscription.</li>
            <li>If I don't cancel during my 14-day trial, Noom will charge me $129 on March 2, 2023.</li>
            <li>After that, my payment method will be automatically charged $129 every 2 months until I cancel.</li>
            <li>VAT charged at any renewal period is subject to change based on any changes to applicable tax rates.</li>
            <li>I can cancel by messaging my coach in the app or in the online subscription portal.</li>
            <li>If I cancel before the end of a subscription period, I understand that Noom will not provide a partial refund.</li>
            <li>This subscription is bound to Noom's <RouterLink to="/terms" class="underline hover:opacity-80">Terms and Conditions</RouterLink>,
                <RouterLink to="/privacy" class="underline hover:opacity-80">Privacy Policy</RouterLink> and <RouterLink to="/research" class="underline hover:opacity-80">Research Policy</RouterLink></li>
        </ul>
    </div>
</template>