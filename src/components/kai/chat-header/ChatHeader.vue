<template>
  <div class="block lg:hidden border-b border-gray-500">
    <div class="bg-chatgpt-500 text-gray-100 px-4 py-2 w-full min-h-12 h-12 lg:h-14 z-50 relative max-w-4xl mx-auto"
      title="header">
      <div class="flex justify-between items-center max-w-4xl mx-auto w-full h-full">
        <!-- this will open the sidebar -->
        <button @click="showSideBarMobile" class="sidebar-toggler">
          <OutlineButton ref="chatSidebarMobile">
            <i class="fas fa-bars px-2"></i>
          </OutlineButton>
        </button>
        <div class="text-gray-300">{{ queryName }}</div>
        <button @click="props.addInstance">
          <OutlineButton>
            <Plus class="w-5" />
          </OutlineButton>
        </button>
      </div>
      <!-- <div v-if="showDropdownMenu"
        class="absolute left-0 top-full flex flex-col w-60 p-1 rounded-xl shadow-xl bg-chatgpt-400">
        <RouterLink v-for="item, i in navList" :key="i" :to="item.link"
          :class="item.link === route.path ? 'bg-chatgpt-500' : ''"
          class="px-3 py-2 w-full text-start hover:bg-chatgpt-500 rounded-lg flex items-center gap-2 capitalize">
          <NavIcon :index="i" />
          {{ item.name }}
        </RouterLink>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Plus from "../../icons/plus.vue";
import OutlineButton from "./button/OutlineButton.vue";
import { useChatSideBarStore } from "../../../stores/chatSideBar";

const { state, showSideBarMobile } = useChatSideBarStore()
const props = defineProps<{
  addInstance: () => void;
  handleInstanceId: (id: number) => void;
  queryName?: string;
}>();

const showDropdownMenu = ref<boolean>(false);
</script>
