<template>
  <div class="w-full space-y-5 mt-20">
    <div v-for="(item, i) in  navList_with_dropdown" :key="i" class="w-full text-base capitalize">

      <!-- For KraalAI redirect -->
      <a v-if="item.link && item.link.includes('http')" :href="item.link" @click="() => { handleTab(i) }"
        :class='["sidebar-nav-item px-10 gap-3", activeStyle(item.link)]'>
        <div class="icon-box">
          <NavIcon :name="item.icon" />
        </div>
        {{ item.name }}
      </a>

      <!-- For RouterLink -->
      <RouterLink v-if="item.link && !item.link.includes('http')" :to="item.link" @click="() => { handleTab(i) }"
        :class='["sidebar-nav-item px-10 gap-3", activeStyle(item.link)]'>
        <div class="icon-box">
          <NavIcon :name="item.icon" />
        </div>
        {{ item.name }}
      </RouterLink>

      <!-- If dropdown is true print dropdown -->
      <!-- <SidebarDropNav v-if="item.dropdown" :navItem="item" :index="i" /> -->
    </div>
  </div>
</template>


<script lang="ts" setup>
// this nav component will be used in absolute dropdown component also.
import { ref } from "vue";
import { RouterLink } from "vue-router";
import NavIcon from "./NavIcon.vue";
import SidebarDropNav from "./SidebarDropNav.vue";
import { navList_with_dropdown } from './navList';
import { useRoute } from "vue-router";

const route = useRoute();
// const props = defineProps<{ expand: boolean | null }>()

const tabIndex = ref<number>(0);
function handleTab(n: number) {
  tabIndex.value = n;
}
function activeStyle(navPath: string): string {
  if (route.path === navPath) {
    return "bg-kraal-blue-500 text-white"
  } else {
    return "text-gray-700 hover:bg-gray-100 focus:bg-kraal-blue-500 focus:text-white";
  }
}
</script>

<style scoped>
.sidebar-nav-item {
  align-items: center;
  display: flex;
  /* !important `grid-template-columns: 2.5rem (square icon) auto; ` */
  /* grid-template-columns: 2.75rem auto; */
  height: 3rem;
  width: 100%;
}

.icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  min-width: 2.25rem;
  height: 2.25rem;
}

.sidebar-link-open {
  animation: sidebarLinkOpen 300ms ease-in forwards;
  overflow: hidden;
}

@keyframes sidebarLinkOpen {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.sidebar-link-hide {
  animation: sidebarLinkHide 300ms ease-in forwards;
  overflow: hidden;
}

@keyframes sidebarLinkHide {
  0% {
    opacity: 1;
  }

  50% {
    width: 100%;
    opacity: 0;
  }

  100% {
    opacity: 0;
    width: 0;
  }
}

.active-dot {
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.3);
}
</style>