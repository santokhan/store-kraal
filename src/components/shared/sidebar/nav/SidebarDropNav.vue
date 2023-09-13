<template>
    <div title="dropdown">
        <!-- dropdown toggler -->
        <!-- this event listener is mendatory for expand collapse dropdown nav list -->
        <button type="button" :class='["sidebar-nav-item px-10 gap-3 font-medium text-gray-600", "hover:bg-gray-100"]'
            @click="() => { expand = !expand }">
            <div class="icon-box">
                <NavIcon :index="props.index" />
            </div>
            <div class="w-full capitalize flex justify-start items-center">{{ props.navItem.name }}</div>
            <AngleDown :class="['w-4 h-4 transition-transform ease-in-out', expand || '-rotate-90']" />
        </button>


        <!-- dropdown -->
        <div class="space-y-2 border-l-4 border-l-kraal-blue-500 my-2" v-if="props.navItem.dropdown && expand">
            <RouterLink class="sidebar-nav-item pl-6 text-gray-600" v-for="(dd, di) in props.navItem.dropdown" :key="index + di"
                :to="dd.link" :class="active_style_dropdown(dd.link, route.path)">
                <div class="icon-box">
                    <NavIcon :name="dd.icon" />
                </div>
                <div class="w-full flex justify-start items-center">{{ dd.name }}</div>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { RouterLink } from "vue-router";
import NavIcon from "./NavIcon.vue";
import { useRoute } from "vue-router";
import { NavList } from "./navList";
import AngleDown from "../../../icons/angle-down.vue";

const expand = ref<boolean>(false)
const route = useRoute();
const props = defineProps<{ navItem: NavList, index: number }>()


const tabIndex = ref<number>(0);
function handleTab(n: number) {
    tabIndex.value = n;
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

// low level function
function active_style_dropdown(to: string, path: string): string {
    // alert(to + " " + path)
    if (to === path) {
        return "bg-kraal-blue-500 text-white"
    } else {
        return "text-gray-700 bg-white hover:bg-gray-100";
    }
}

onBeforeMount(() => {
    // high level function
    function expand_if_dropdown_selected() {
        if (route.path.includes("/report/")) {
            expand.value = true;
        }
    }
    expand_if_dropdown_selected()
})
</script>

<style scoped>
.sidebar-nav-item {
    align-items: center;
    display: flex;
    /* !important `grid-template-columns: 2.5rem (square icon) auto; ` */
    /* grid-template-columns: 2.75rem auto; */
    height: 2.75rem;
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