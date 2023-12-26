<template>
    <div v-if="userStoreRef.currentUser" class="w-full relative text-sm mb-2">
        <hr class="border-gray-600 mb-1">
        <div v-if="openSettings" ref="settings"
            class="absolute bottom-full left-0 right-0 bg-neutral-950 text-gray-200 rounded-lg overflow-hidden py-1 z-[10]">
            <NavLink :item="glbi(0)">
                <User class="w-5" />
            </NavLink>
            <NavLink :item="glbi(1)">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                        d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </NavLink>
            <NavLink :item="glbi(2)">
                <Team class="w-5" />
            </NavLink>
            <NavLink :item="glbi(3)">
                <Card class="w-5" />
            </NavLink>
            <NavLink :item="glbi(4)">
                <i class="fa fa-info"></i>
            </NavLink>
            <hr class="border-1 border-neutral-700 my-1">
            <NavLink :item="glbi(5)">
                <Logout class="w-5" />
            </NavLink>
        </div>
        <button type="button" @click="handleSettings" ref="opener" title="MenuBar"
            :class="[
                'w-full text-gray-100 flex items-center gap-3 px-2 h-[3.25rem] rounded-lg hover:bg-chatgpt-700 overflow-x-hidden', openSettings && 'bg-chatgpt-700']">
            <UserIcon>{{ userStoreRef.currentUser.value?.initials }}</UserIcon>
            <h5 class="w-full flex justify-start font-medium text-sm tracking-wider font-normal">
                {{ userStoreRef.currentUser.value?.fullName }}
            </h5>
            <div class="w-auto"><i class="fa fa-ellipsis-h text-sm text-neutral-400"></i></div>
        </button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core';
import { businessUserInfo } from '../../../firebase/read.business.user'
import NavLink from './left/footer/NavLink.vue'
import UserIcon from './left/footer/UserProfileIcon.vue';
import User from '../../icons/user-simple.vue';
import Card from '../../icons/card.vue';
import Logout from '../../icons/logout.vue';
import Team from '../../icons/team.vue';
import { generate_icon, get_left_bar_item as glbi } from "./sidebar-data";
import { storeToRefs } from 'pinia';
import { useUserStore } from '../../../stores/userStore';

const opener = ref(null)
const openSettings = ref(false)
const settings = ref(null)
const userStore = useUserStore();
const userStoreRef = storeToRefs(userStore);
// From firestore
const userData = ref<any>()

function handleSettings() {
    openSettings.value = !openSettings.value
    onClickOutside(settings, () => {
        openSettings.value = false
    }, { ignore: [opener] })
}
onMounted(async () => {
    if (!userStore.currentUser) {
        await userStore.loadUser();
    }
})
</script>
