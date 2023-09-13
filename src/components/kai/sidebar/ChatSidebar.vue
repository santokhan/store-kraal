<template>
	<!-- large screen sidebar -->
	<div v-if="isLargeScreen">
		<ChatSideBarToggler v-if="!state.sidebarDesktop" class="absolute left-2 top-2" @click="showSideBarDesktop" />
		<!-- class name will be "chat-sidebar-open" | "chat-sidebar-close" -->
		<SidebarContainer :class="dyClass(state.sidebarDesktop)">
			<div class=" flex flex-row gap-2 my-2">
				<NewChat />

				<ChatSideBarToggler v-if="isLargeScreen" @click="hideSideBarDesktop" />
			</div>
			<ChatSideBarNavs />
		</SidebarContainer>
	</div>

	<!-- mobile sidebar -->
	<div v-else v-if="state.sidebarMobile" class="absolute left-0 top-0 z-[60]" ref="chatSidebarMobile">
		<!-- class name will be "chat-sidebar-open" | "chat-sidebar-close" -->
		<SidebarContainer :class="dyClass(state.sidebarMobile)">
			<div class="flex flex-row gap-2 my-2">
				<NewChat />

				<button @click="hideSideBarMobile"
					class="flex p-3 items-center justify-center transition-colors duration-200 text-white text-sm rounded-md border border-white/20 h-11 w-11 flex-shrink-0 hover:bg-gray-500/10">
					<i class="fa fa-plus rotate-45 text-lg"></i>
				</button>
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

const { state, hideSideBarMobile, showSideBarDesktop, hideSideBarDesktop } = useChatSideBarStore()
// tailwind lg `"min-width: 1024px"`
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

function dyClass(condition: boolean) {
	return condition ? 'chat-sidebar-open' : 'chat-sidebar-close'
}

const chatSidebarMobile = ref<null | HTMLElement>(null)
onClickOutside(chatSidebarMobile, hideSideBarMobile)
</script>

