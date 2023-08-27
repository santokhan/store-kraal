<template>
    <div class="bg-gray-100 h-[100dvh]">
        <Animate v-if="isAnimate" :handleState="handleAnimate" />
        <Mint v-else-if="mintSecurityInfo" :handleMintSecurityInfo="handleMintSecurityInfo" />
        <Account v-else :handleMintSecurityInfo="handleMintSecurityInfo" />
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import Animate from "../components/form/animation/Animate.vue";
import Mint from "../components/form/steps/mint-security/Mint.vue";
import Account from "../components/form/steps/account/linking/Account.vue";

const { id, back, next }: any = defineProps({
    id: Number,
    back: Function,
    next: Function,
});

const mintSecurityInfo = ref(false);
function handleMintSecurityInfo() {
    mintSecurityInfo.value = !mintSecurityInfo.value;
}

const isAnimate: any = ref({ value: true });
function handleAnimate() {
    isAnimate.value = false;
}
</script>
  
<style scoped>
.animate-pop-up {
    animation: popup 0.45s ease-out forwards;
}

@keyframes popup {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0%);
    }
}

.animate-pop-down {
    animation: popdown 0.25s ease-in forwards;
}

@keyframes popdown {
    0% {
        transform: translateY(0%);
    }

    100% {
        transform: translateY(calc(100% - 48px));
    }
}
</style>
  