<template>
    <div v-if="userData?.firstName" class="w-full relative text-sm mb-2">
        <hr class="border-gray-600 mb-1">
        <!-- Drop Up bar -->
        <div v-if="openSettings" ref="settings"
            class="absolute bottom-full left-0 right-0 bg-neutral-950 text-gray-200 rounded-lg overflow-hidden py-1 z-[10]">
            <NavLink to="" @click="handleModal" role="button" v-if="customInstructions">
                <IconBox>
                    <ChatBubbleLeftEllipsisIcon class="w-5" />
                </IconBox>
                Custom Instructions
            </NavLink>
            <NavLink to="/user-setting">
                <IconBox>
                    <User class="w-5" />
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
            <NavLink to="/faqs">
                <IconBox>
                    <i class="fa fa-info"></i>
                </IconBox>
                FAQs
            </NavLink>
            <hr class="border-1 border-neutral-700 my-1">
            <NavLink class="w-full flex items-center hover:bg-chatgpt-700" to="/user/sign-out">
                <IconBox>
                    <Logout class="w-5" />
                </IconBox>
                Log out
            </NavLink>
        </div>
        <button type="button" @click="handleSettings" ref="opener" title="MenuBar"
            :class="[
                'w-full text-gray-100 flex items-center gap-3 px-2 h-[3.25rem] rounded-lg hover:bg-chatgpt-700 overflow-x-hidden', openSettings && 'bg-chatgpt-700']">
            <UserIcon>{{ userData.firstName[0] }}{{ userData.lastName[0] }}</UserIcon>
            <h5 class="w-full flex justify-start font-medium text-sm tracking-wider font-normal">
                {{ userData ? userData.firstName + " " + userData.lastName : "..." }}
            </h5>
            <div class="w-auto"><i class="fa fa-ellipsis-h text-sm text-neutral-400"></i></div>
        </button>
    </div>
    <CustomInstructions :isOpenModal="isOpenModal" :handleModal="handleModal" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline'
import { storeToRefs } from 'pinia';
import { businessUserInfo } from '../../../firebase/read.business.user'
import IconBox from '../../shared/header/dashbboard/absolutesidebar/icon/IconBox.vue';
import CustomInstructions from "./custom-instructions/CustomInstructions.vue";
import NavLink from './footer/NavLink.vue'
import UserIcon from './footer/UserProfileIcon.vue';
import User from '../../icons/user-simple.vue';
import Card from '../../icons/card.vue';
import Logout from '../../icons/logout.vue';
import Team from '../../icons/team.vue';
import { useSideBarStoreAzureStore } from '../../../stores/sideBarStoreAzure';

const opener = ref(null)
const openSettings = ref(false)
const settings = ref(null)
const isOpenModal = ref<boolean>(false)
// From firestore
const userData = ref<any>()
const store = useSideBarStoreAzureStore()
const { customInstructions } = storeToRefs(store)

function handleSettings() {
    openSettings.value = !openSettings.value
    onClickOutside(settings, () => {
        openSettings.value = false
    }, { ignore: [opener] })
}
function handleModal() {
    isOpenModal.value = !isOpenModal.value

    // hide dropdown
    openSettings.value = false;
}
onMounted(() => {
    businessUserInfo.getUserData(async (data) => {
        if (!data) return;
        userData.value = data
    })
})
</script>
