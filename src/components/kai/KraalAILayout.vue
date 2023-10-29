<template>
    <div class="fixed inset-0 bg-chatgpt-500 z-50 flex">
        <SidebarLeft />
        <div class="flex flex-col w-full h-full">
            <slot></slot>
        </div>
        <RightSidebar />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue"
import SidebarLeft from "./sidebar/ChatSidebar.vue"
import RightSidebar from "./sidebar/right/RightSidebar.vue"
import { useSideBarStoreAzureStore } from "../../stores/sideBarStoreAzure"

const store = useSideBarStoreAzureStore()
onMounted(() => {
    store.assignSideBarData()

    // Set `background: bg-chatgpt-500` on /Kai page for Apple phones
    document.body.style.background = "rgb(52 53 65)"
})
onUnmounted(() => { document.body.style.background = "" })
</script>