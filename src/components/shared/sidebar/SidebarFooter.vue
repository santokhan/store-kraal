<template>
    <hr class="mb-1">
    <div class="w-full relative text-sm mb-2 px-2">
        <!-- Drop Up bar -->
        <div v-if="openSettings" ref="settings"
            class="absolute bottom-full left-0 right-0 text-gray-800 rounded-lg overflow-hidden py-1 z-[10] bg-gray-100 mx-2 mb-1">
            <RouterLink to="/user-setting" class="w-full flex items-center hover:bg-white">
                <div class="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                    <UserSimple class="w-5" />
                </div>
                User Settings
            </RouterLink>
            <RouterLink to="/team-setting" class="w-full flex items-center hover:bg-white">
                <div class="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                    <Team class="w-5" />
                </div>
                Team Settings
            </RouterLink>
            <RouterLink to="/bills" class="w-full flex items-center hover:bg-white">
                <div class="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                    <Card class="w-5" />
                </div>
                Bills
            </RouterLink>
            <hr class="border-1 my-1 mx-3">
            <RouterLink to="/logout" class="w-full flex items-center hover:bg-white">
                <div class="w-[2.5rem] h-[2.5rem] flex justify-center items-center">
                    <Logout class="w-5" />
                </div>
                Log out
            </RouterLink>
        </div>

        <!-- [SK] Santo Khan   ••• -->
        <button type="button" @click="handleOpenSettings" ref="opener" title="Settings"
            :class="['w-full text-gray-800 flex items-center gap-3 px-2 h-[3.25rem] rounded-lg hover:bg-gray-100 overflow-x-hidden']">
            <div v-if="userData?.firstName"
                class="bg-white min-w-[2.25rem] min-h-[2.25rem] flex justify-center items-center rounded">
                <h5 class="font-medium">{{ userData.firstName[0] }}{{ userData.lastName[0] }}</h5>
            </div>
            <div class="w-full flex justify-start">
                <h5 class="font-semibold" v-if="userData">{{ userData.firstName }} {{ userData.lastName }}</h5>
                <h5 v-else>...</h5>
            </div>
            <div class="w-auto"><i class="fa fa-ellipsis-h text-sm text-neutral-400"></i></div>
        </button>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue'
import { businessUserInfo } from '../../../firebase/read.business.user'
import Logout from '../../icons/logout.vue';
import IconBox from '../../shared/header/dashbboard/absolutesidebar/icon/IconBox.vue';
import Card from '../../icons/card.vue';
import Team from '../../icons/team.vue';
import UserSimple from '../../icons/user-simple.vue';
import NavLink from '../../kai/sidebar/footer/NavLink.vue';
import { RouterLink } from 'vue-router';

const openSettings = ref(false)
const opener = ref(null)
const settings = ref(null)

function handleOpenSettings() {
    openSettings.value = !openSettings.value
    onClickOutside(settings, () => {
        openSettings.value = false
    }, { ignore: [opener] })
}

const userData = ref<any>()
businessUserInfo.getUserData(data => {
    if (data) { userData.value = data }
})
</script>

<style scoped></style>