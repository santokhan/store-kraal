<template>
    <div :class="[
        'fixed lg:relative left-0 top-0 h-12 lg:h-16 min-h-[4rem] z-[31] w-full',
        'grid grid-cols-[auto,auto,1fr,auto] justify-between items-center gap-3',
        'bg-white borderb px-4 sm:px-6 md:px-8 lg:px-12'
    ]">
        <button class="rounded-lg w-8 h-8 flex lg:hidden justify-center items-center border hover:text-kraal-blue-500"
            :class="activeStyle(mDropodown == 'dd-open')" @click="handleMDropdown" ref="toggler" type="button">
            <i v-if="mDropodown === 'hidden' || mDropodown === 'dd-close'" class="fas fa-bars px-2 mDDToggler"></i>
            <i v-else class="fas fa-plus rotate-45 px-2 mDDToggler"></i>
        </button>

        <RouterLink to="/">
            <Kraal class="w-20 text-kraal-blue-500" />
        </RouterLink>

        <p><!-- empty div for grid --></p>

        <ProfileOnHeader />
    </div>

    <AbsoluteSidebar :class="mDropodown" ref="target" />
</template>
  
<script lang="ts" setup>
import { provide, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Kraal from "../../../icons/kraal.vue";
import { onClickOutside } from "@vueuse/core";
import Button from "../../../dashboard/main/header/button/Button.vue";
import AbsoluteSidebar from "./absolutesidebar/AbsoluteSidebar.vue";
import ProfileOnHeader from "../profile/ProfileOnHeader.vue";

const router = useRouter();
// class name as value
const mDropodown = ref<string>('hidden');
function handleMDropdown() {
    if (mDropodown.value === 'hidden') {
        mDropodown.value = 'dd-open';
    } else {
        if (mDropodown.value === 'dd-open') {
            mDropodown.value = 'dd-close';
        } else {
            mDropodown.value = 'dd-open';
        }
    }
}

const toggler = ref<null | HTMLElement>(null)
const target = ref<null | HTMLElement>(null)
onClickOutside(target, () => {
    if (mDropodown.value === 'dd-open') {
        mDropodown.value = 'dd-close';
    }
}, { ignore: [toggler] })

provide('mDropodown', mDropodown)
provide('handleMDropdown', handleMDropdown)

function activeStyle(condition: boolean) {
    return condition
        ? "border-kraal-blue-500 text-kraal-blue-500 "
        : "bg-transparent text-noom-text-800 hover:text-kraal-blue-500 focus:border-kraal-blue-500 focus:text-kraal-blue-500 ";
}
</script>

<style scoped>
/* These classes `.dd-open`, `.dd-close` name will be store in the `mDropodown` state and it will change on toggle */
.dd-open {
    width: 15rem;
    height: calc(100dvh - 48px);
    animation: ddOpen 300ms ease-out forwards;
    transform-origin: top;
    opacity: 0;
    z-index: 0;
}

@keyframes ddOpen {
    0% {
        transform: translateX(-15px);
        opacity: 0;
        z-index: 31;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
        z-index: 31;
    }
}

.dd-close {
    width: 15rem;
    height: calc(100dvh - 48px);
    animation: ddClose 300ms ease-in forwards;
    z-index: 0;
}

@keyframes ddClose {
    0% {
        transform: translateX(0px);
        opacity: 1;
        z-index: 31;
    }

    50% {
        opacity: 0;
        z-index: 31;
    }

    100% {
        opacity: 0;
        transform: translateX(-15px);
        z-index: 31;
    }
}
</style>
