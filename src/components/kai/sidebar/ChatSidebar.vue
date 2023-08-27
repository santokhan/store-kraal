<template>
	<!-- Large screen sidebar -->
	<div v-if="isLargeScreen">
		<ChatSideBarToggler v-if="!store.getSidebar()" class="absolute left-2 top-2" @click="store.showSideBarDesktop" />
		<SidebarContainer :class="dyClass(store.getSidebar())">
			<div class="flex flex-row gap-2 my-2">
				<NewChat />
				<ChatSideBarToggler v-if="isLargeScreen" @click="store.hideSideBarDesktop" />
			</div>
			<ChatSideBarNavs />
		</SidebarContainer>
	</div>

	<!-- Mobile sidebar -->
	<div v-else v-if="store.getSidebarMobile()" class="absolute left-0 top-0 z-[60]" ref="chatSidebarMobile">
		<SidebarContainer :class="dyClass(store.getSidebarMobile())">
			<div class="flex flex-row gap-2 my-2">
				<NewChat /><button @click="store.hideSideBarMobile"
					class="flex p-3 items-center justify-center transition-colors duration-200 text-white text-sm rounded-md border border-white/20 h-11 w-11 flex-shrink-0 hover:bg-gray-500/10"><i
						class="fa fa-plus rotate-45 text-lg"></i></button>
			</div>
			<ChatSideBarNavs />
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

const store = useChatSideBarStore()

// tailwind lg `"min-width: 1024px"`
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const dyClass = (condition: boolean | null) => condition ? 'chat-sidebar-open' : 'chat-sidebar-close'

const chatSidebarMobile = ref<null | HTMLElement>(null)
onClickOutside(chatSidebarMobile, store.hideSideBarMobile)
</script>

