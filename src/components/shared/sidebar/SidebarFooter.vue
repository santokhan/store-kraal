<template>
    <hr class="mb-1">
    <div class="w-full relative text-sm mb-2 px-2">
        <!-- Drop Up bar -->
        <div v-if="openSettings" ref="settings"
            class="absolute bottom-full left-0 right-0 text-gray-800 rounded-lg overflow-hidden py-1 z-[10] bg-gray-100 mx-2 mb-1">
            <NavLinkFooter :to="userNavs[0].path">
                <IconBox>
                    <UserSimple class="w-5" />
                </IconBox>
                {{ userNavs[0].name }}
            </NavLinkFooter>
            <NavLinkFooter :to="userNavs[1].path">
                <IconBox>
                    <Team class="w-5" />
                </IconBox>
                {{ userNavs[1].name }}
            </NavLinkFooter>
            <NavLinkFooter :to="userNavs[2].path">
                <IconBox>
                    <Card class="w-5" />
                </IconBox>
                {{ userNavs[2].name }}
            </NavLinkFooter>

            <hr class="border-1 my-1 mx-3">
            <NavLinkFooter :to="userNavs[3].path">
                <IconBox>
                    <Logout class="w-5" />
                </IconBox>
                {{ userNavs[3].name }}
            </NavLinkFooter>
        </div>

        <!-- [SK] Santo Khan   ••• -->
        <button type="button" @click="handleOpenSettings" ref="opener" title="Settings"
            :class="[pathExistOnNavs() ? 'bg-gray-100' : '', 'w-full text-gray-800 flex items-center gap-3 px-2 h-[3.25rem] rounded-lg hover:bg-gray-100 overflow-x-hidden']">
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
import Card from '../../icons/card.vue';
import Team from '../../icons/team.vue';
import UserSimple from '../../icons/user-simple.vue';
import { RouterLink, useRoute } from 'vue-router';
import IconBox from '../../kai/sidebar/footer/IconBox.vue';
import NavLinkFooter from './NavLinkFooter.vue';

const route = useRoute()

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

const userNavs = [
    {
        name: "User Settings",
        path: "/user-setting"
    },
    {
        name: "Team Settings",
        path: "/team-setting"
    },
    {
        name: "Bills",
        path: "/bills"
    },
    {
        name: "Logout",
        path: "/logout"
    },
]

function pathExistOnNavs(): boolean {
    const path = route.path
    let exist: boolean = false
    userNavs.forEach(e => {
        if (e.path === path) {
            exist = true;
        }
    })
    return exist
}
</script>

<style scoped></style>