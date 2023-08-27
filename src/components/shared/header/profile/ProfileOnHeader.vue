<template>
    <div class="flex justify-end lg:items-center gap-2 relative">
        <button @click="handleProfileDD" type="button" ref="userIcon"
            class="w-7 h-7 text-kraal-text-800 hover:text-kraal-blue-500 transition ease-in-out font-semibold flex items-center gap-2"
            :class="activeUserIcon(expand)">
            <UserPro class="w-full" />
        </button>

        <!-- Absolute dropdown -->
        <div ref="profileDD" v-if="expand"
            class="w-60 absolute right-0 top-[46px] bg-white shadow-xl shadow-black/5 rounded-b-lg drop py-6 space-y-4">
            <!--  user profile -->
            <div class="flex flex-col items-center space-y-2">
                <img src="../../../../assets/image/profile/profile.svg" alt="user-profile"
                    class="bg-gray-200 w-20 h-20 object-cover rounded-full overflow-hidden">
                <h5 class="capitalize text-kraal-text-800 font-semibold" v-if="userInfo.data.firstName">
                    {{ userInfo.data.firstName }} {{ userInfo.data.lastName }}</h5>
            </div>

            <!-- Navigation -->
            <div class="space-y-1">
                <RouterLink class="sidebar-nav-item px-4 transition-colors ease-in-out" v-for="(dd, di) in userNavList" :key="di" :to="dd.link"
                    :class="activeStyle(dd.link === route.path)">
                    <div class="icon-box">
                        <NavIcon :name="dd.icon" />
                    </div>
                    <div class="w-full flex justify-start items-center capitalize">{{ dd.name }}</div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import UserPro from '../../../icons/user-pro.vue';
import { RouterLink, useRoute } from 'vue-router';
import { userNavList } from '../../../shared/sidebar/nav/navList';
import NavIcon from '../../sidebar/nav/NavIcon.vue';
import { onClickOutside } from '@vueuse/core';
import getFirestoreUserInfo from '../../../../firebase/read.data';

const userInfo = reactive<any>({ data: {} })
getFirestoreUserInfo().then(info => {
    userInfo.data = info;
})

const route = useRoute()

const expand = ref<boolean>(false)
const userIcon = ref<null | HTMLElement>(null)
// ignore from `onClickOutside`
const profileDD = ref<null | HTMLElement>(null)

function handleProfileDD() {
    expand.value = !expand.value
}
onClickOutside(userIcon, () => {
    // hide dropdown `onClickOutside` when `expand` is `true`
    if (expand.value) {
        expand.value = false
    }
}, { ignore: [profileDD] })

function activeStyle(condition: boolean): string {
    if (condition) {
        return "bg-kraal-blue-500 text-white"
    } else {
        return "text-slate-700 hover:bg-gray-100 focus:bg-kraal-blue-500 focus:text-white";
    }
}

// return `'text-kraal-blue-500'` if dropdown expanded
function activeUserIcon(condition: boolean) {
    return condition && 'text-kraal-blue-500'
}
</script>

<style scoped>
.sidebar-nav-item {
    align-items: center;
    /* border-radius: 0.5rem; */
    display: flex;
    /* !important `grid-template-columns: 2.5rem (square icon) auto; ` */
    /* grid-template-columns: 2.75rem auto; */
    height: 2.25rem;
    width: 100%;
}

.icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
}

.sidebar-link-open {
    animation: sidebarLinkOpen 300ms ease-in forwards;
    overflow: hidden;
}

@keyframes sidebarLinkOpen {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.sidebar-link-hide {
    animation: sidebarLinkHide 300ms ease-in forwards;
    overflow: hidden;
}

@keyframes sidebarLinkHide {
    0% {
        opacity: 1;
    }

    50% {
        width: 100%;
        opacity: 0;
    }

    100% {
        opacity: 0;
        width: 0;
    }
}

.drop {
    animation: drop 300ms ease-in-out;
    transform-origin: top right;
}

@keyframes drop {
    0% {
        transform: scale(0);
    }

    80% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
</style>