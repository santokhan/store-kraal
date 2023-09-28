<template>
    <hr class="border-gray-600 mb-1">
    <div class="w-full relative text-sm mb-2">
        <!-- Drop Up bar -->
        <div v-if="openSettings" ref="settings"
            class="absolute bottom-full left-0 right-0 bg-neutral-950 text-gray-200 rounded-lg overflow-hidden py-1 z-[10]">
            <NavLink to="/user-setting">
                <IconBox>
                    <UserSimple class="w-5" />
                </IconBox>
                User Settings
            </NavLink>
            <NavLink to="/team-setting">
                <IconBox>
                    <Team class="w-5" />
                </IconBox>
                Team Settings
            </NavLink>
            <NavLink to="/bills">
                <IconBox>
                    <Card class="w-5" />
                </IconBox>
                Bills
            </NavLink>
            <hr class="border-1 border-neutral-700 my-1">
            <NavLink class="w-full flex items-center hover:bg-chatgpt-700" to="/logout">
                <IconBox>
                    <Logout class="w-5" />
                </IconBox>
                Log out
            </NavLink>
        </div>

        <button type="button" @click="handleOpenSettings" ref="opener"
            class="w-full text-gray-100 flex items-center gap-3 px-2 h-[3.25rem] rounded-lg hover:bg-chatgpt-700 overflow-x-hidden"
            :class="openSettings ? 'bg-chatgpt-700' : ''" title="Settings">
            <div v-if="userData?.firstName"
                class="bg-chatgpt-500 min-w-[2.25rem] min-h-[2.25rem] flex justify-center items-center rounded">
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
import NavLink from './footer/NavLink.vue'
import IconBox from '../../shared/header/dashbboard/absolutesidebar/icon/IconBox.vue';
import Card from '../../icons/card.vue';
import Team from '../../icons/team.vue';
import UserSimple from '../../icons/user-simple.vue';

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