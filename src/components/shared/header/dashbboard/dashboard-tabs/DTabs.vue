<template>
    <div class="hidden lg:flex gap-2 xl:gap-4 w-full font-medium text-noom-text-900 items-center">
        <DTab :tab="1" :handleTab="handleTab" :index="index">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H13V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="currentColor" />
            </svg>
            Account
        </DTab>
        <DTab :tab="2" :handleTab="handleTab" :index="index">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 9H17.95C17.7 7.16667 16.9377 5.61233 15.663 4.337C14.3877 3.06233 12.8333 2.3 11 2.05V9ZM9 17.95V2.05C6.98333 2.3 5.31267 3.179 3.988 4.687C2.66267 6.19567 2 7.96667 2 10C2 12.0333 2.66267 13.804 3.988 15.312C5.31267 16.8207 6.98333 17.7 9 17.95ZM11 17.95C12.8333 17.7167 14.3917 16.9583 15.675 15.675C16.9583 14.3917 17.7167 12.8333 17.95 11H11V17.95ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.679 0.262333 13.887 0.787C15.0957 1.31233 16.154 2.02933 17.062 2.938C17.9707 3.846 18.6873 4.90433 19.212 6.113C19.7373 7.321 20 8.61667 20 10C20 11.3667 19.7373 12.6583 19.212 13.875C18.6873 15.0917 17.975 16.154 17.075 17.062C16.175 17.9707 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                    fill="currentColor" />
            </svg>
            Assets Allocation
        </DTab>
        <DTab :tab="3" :handleTab="handleTab" :index="index">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 20C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V4C0 3.45 0.195667 2.97933 0.587 2.588C0.979 2.196 1.45 2 2 2H3V0.975C3 0.691667 3.09567 0.458333 3.287 0.275C3.479 0.0916668 3.71667 0 4 0C4.28333 0 4.521 0.0956666 4.713 0.287C4.90433 0.479 5 0.716667 5 1V2H13V0.975C13 0.691667 13.096 0.458333 13.288 0.275C13.4793 0.0916668 13.7167 0 14 0C14.2833 0 14.5207 0.0956666 14.712 0.287C14.904 0.479 15 0.716667 15 1V2H16C16.55 2 17.021 2.196 17.413 2.588C17.8043 2.97933 18 3.45 18 4V18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM2 6V4V6Z"
                    fill="currentColor" />
            </svg>
            Historical Balances
        </DTab>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DTab from './DTab.vue'

const index = ref<number>(1);
function handleTab(n: number) {
    index.value = n;
}
</script>

<style scoped></style>