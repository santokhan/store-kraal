<template>
    <div class="border-l ml-2 pl-2 space-y-1" v-if="props.navItem.dropdown && expand">
        <RouterLink class="sidebar-nav-item" v-for="(dd, di) in props.navItem.dropdown" :key="index + di" :to="dd.link"
            :class="activeStyle(dd.link === route.path)">
            <div class="icon-box">
                <NavIcon :name="dd.icon" />
            </div>
            <div class="w-full flex justify-start items-center">{{ dd.name }}</div>
        </RouterLink>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { NavList } from "../../sidebar/nav/navList";
import NavIcon from "../../sidebar/nav/NavIcon.vue";

const expand = ref<boolean>(true)
const route = useRoute();
const props = defineProps<{ navItem: NavList, index: number }>()

const tabIndex = ref<number>(0);
function handleTab(n: number) {
    tabIndex.value = n;
}
function activeStyle(condition: boolean): string {
    if (condition) {
        return "bg-kraal-blue-500 text-white"
    } else {
        return "text-noom-text-800 hover:bg-gray-200 focus:bg-kraal-blue-500 focus:text-white";
    }
}
function dyClass(condition: boolean | null) {
    if (condition === null) {
        return ""
    } else {
        if (condition === true) {
            return "sidebar-link-open";
        } else {
            // if false
            return "sidebar-link-hide";
        }
    }
}
</script>

<style scoped>
.sidebar-nav-item {
    align-items: center;
    border-radius: 0.5rem;
    display: flex;
    /* !important `grid-template-columns: 2.5rem (square icon) auto; ` */
    /* grid-template-columns: 2.75rem auto; */
    height: 2.25rem;
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
</style>