<template>
    <div v-if="userData?.firstName" class="w-full relative text-sm mb-2">
        <hr class="border-gray-600 mb-1">
        <div v-if="openSettings" ref="settings"
            class="absolute bottom-full left-0 right-0 bg-neutral-950 text-gray-200 rounded-lg overflow-hidden py-1 z-[10]">
            <NavLink :item="glbi(0)">
                <User class="w-5" />
            </NavLink>
            <NavLink :item="glbi(1)">
                <Team class="w-5" />
            </NavLink>
            <NavLink :item="glbi(2)">
                <Card class="w-5" />
            </NavLink>
            <NavLink :item="glbi(3)">
                <i class="fa fa-info"></i>
            </NavLink>
            <hr class="border-1 border-neutral-700 my-1">
            <NavLink :item="glbi(4)">
                <Logout class="w-5" />
            </NavLink>
        </div>
        <button type="button" @click="handleSettings" ref="opener" title="MenuBar"
            :class="[
                'w-full text-gray-100 flex items-center gap-3 px-2 h-[3.25rem] rounded-lg hover:bg-chatgpt-700 overflow-x-hidden', openSettings && 'bg-chatgpt-700']">
            <UserIcon>{{ generate_icon(userData) }}</UserIcon>
            <h5 class="w-full flex justify-start font-medium text-sm tracking-wider font-normal">
                {{ userData ? userData.firstName + " " + userData.lastName : "..." }}
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

const opener = ref(null)
const openSettings = ref(false)
const settings = ref(null)
// From firestore
const userData = ref<any>()

function handleSettings() {
    openSettings.value = !openSettings.value
    onClickOutside(settings, () => {
        openSettings.value = false
    }, { ignore: [opener] })
}
onMounted(() => {
    businessUserInfo.getUserData(async (data) => {
        if (!data) return;
        userData.value = data
    })
})
</script>
