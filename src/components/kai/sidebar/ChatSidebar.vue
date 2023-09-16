<template>
	<div class="absolute lg:relative z-[60] lg:z-0">
		<ChatSideBarToggler @click="store.toggleSideBarDesktop" />
		<SidebarContainer :class="dyClass(state.sidebarDesktop)">
			<NewChat />
			<ChatSideBarNavs />
			<SidebarFooter />
		</SidebarContainer>
	</div>
</template>

<script setup lang="ts">
import ChatSideBarToggler from './ChatSideBarToggler.vue';
import SidebarContainer from './SidebarContainer.vue';
import ChatSideBarNavs from './sidebar-navs/ChatSideBarNavs.vue';
import { useChatSideBarStore } from '../../../stores/chatSideBar';
import { onClickOutside, useMediaQuery } from '@vueuse/core';
import { ref } from 'vue';
import NewChat from './NewChat.vue';
import SidebarFooter from './SidebarFooter.vue';
import { storeToRefs } from 'pinia';

const store = useChatSideBarStore()
const { state } = storeToRefs(store)

function checkScreenSize() {
	// tailwind lg `"min-width: 1024px"`
	const isLargeScreen = useMediaQuery('(min-width: 1024px)')
	if (!isLargeScreen.value) {
		store.toggleSideBarDesktop()
	}
} checkScreenSize()

const dyClass = (condition: boolean | null) => {
	if (condition) {
		// return 'chat-sidebar-open'
		return 'w-[16rem]'
	} else {
		return 'chat-sidebar-close'
	}
}

const chatSidebarMobile = ref<null | HTMLElement>(null)
onClickOutside(chatSidebarMobile, store.hideSideBarMobile)
</script>

