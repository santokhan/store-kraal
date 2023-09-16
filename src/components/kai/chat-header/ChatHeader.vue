<template>
	<div class="block lg:hidden border-b border-gray-500">
		<div class="bg-chatgpt-500 text-gray-100 px-4 py-2 w-full min-h-12 h-12 lg:h-14 z-50 relative max-w-4xl mx-auto">
			<div class="flex justify-between items-center max-w-4xl mx-auto w-full h-full">
				<button type="button" @click="store.showSideBarMobile">
					<OutlineButton ref="chatSidebarMobile"><i class="fas fa-bars px-2"></i></OutlineButton>
				</button>
				<button type="button" @click="store.addNewInstance">
					<OutlineButton>
						<Plus class="w-5" />
					</OutlineButton>
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Plus from "../../icons/plus.vue";
import OutlineButton from "./button/OutlineButton.vue";
import { useChatSideBarStore } from "../../../stores/chatSideBar";

const store = useChatSideBarStore()
</script>
