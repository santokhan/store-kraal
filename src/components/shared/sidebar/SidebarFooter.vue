<template>
    <hr class="mb-1">
    <div class="w-full relative text-sm mb-2 px-2">
        <!-- Drop Up bar -->
        <div v-if="openSettings" ref="settings"
            class="absolute bottom-full left-0 right-0 text-gray-800 rounded-lg overflow-hidden py-1 z-[10] bg-gray-100 mx-2 mb-1">
            <NL :to="userNavs[0].path">
                <IconBox>
                    <UserSimple class="w-5" />
                </IconBox>
                {{ userNavs[0].name }}
            </NL>
            <NL :to="userNavs[1].path">
                <IconBox>
                    <Team class="w-5" />
                </IconBox>
                {{ userNavs[1].name }}
            </NL>
            <NL :to="userNavs[2].path">
                <IconBox>
                    <Card class="w-5" />
                </IconBox>
                {{ userNavs[2].name }}
            </NL>

            <hr class="border-1 my-1 mx-3">
            <NL :to="userNavs[3].path">
                <IconBox>
                    <Logout class="w-5" />
                </IconBox>
                {{ userNavs[3].name }}
            </NL>
        </div>

        <!-- [SK] Santo Khan   ••• -->
        <button v-if="userStoreRef.currentUser.value" type="button" @click="handleOpenSettings" ref="opener"
            title="Settings"
            :class="[pathExistOnNavs() ? 'bg-gray-100' : '', 'w-full text-gray-800 flex items-center gap-3 px-2 h-[3.25rem] rounded-lg hover:bg-gray-100 overflow-x-hidden']">
            <div class="bg-white min-w-[2.25rem] min-h-[2.25rem] grid place-items-center rounded font-medium">
                {{ userStoreRef.currentUser.value?.initials }}
            </div>
            <h5 class="w-full flex justify-start font-medium text-sm tracking-wider font-normal">
                {{ userStoreRef.currentUser.value?.fullName }}
            </h5>
            <div class="w-auto"><i class="fa fa-ellipsis-h text-sm text-neutral-400"></i></div>
        </button>
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { onMounted, ref } from 'vue'
import { businessUserInfo } from '../../../firebase/read.business.user'
import Logout from '../../icons/logout.vue';
import Card from '../../icons/card.vue';
import Team from '../../icons/team.vue';
import UserSimple from '../../icons/user-simple.vue';
import { RouterLink, useRoute } from 'vue-router';
import IconBox from '../../kai/sidebar/footer/IconBox.vue';
import NL from './NavLinkFooter.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../../../stores/userStore';
import UserProfileIcon from '../../kai/sidebar/footer/UserProfileIcon.vue';

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
        name: "Sign Out",
        path: "/user/sign-out"
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

const userStore = useUserStore();
const userStoreRef = storeToRefs(userStore);
onMounted(async () => {
    if (!userStore.currentUser) {
        await userStore.loadUser();
    }
})
</script>

<style scoped></style>