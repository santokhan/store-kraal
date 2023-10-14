<template>
    <div class="fixed left-0 top-0 right-0 bottom-0 bg-chatgpt-500 z-50 flex">
        <SidebarLeft />
        <div class="flex flex-col w-full h-full">
            <slot></slot>
        </div>
        <RightSidebar />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue"
import SidebarLeft from "../sidebar/ChatSidebar.vue"
import { useSideBarStoreAzureStore } from '../../../stores/sideBarStoreAzure'
import RightSidebar from "../sidebar/right-sidebar/RightSidebar.vue"

const store = useSideBarStoreAzureStore()
onMounted(() => {
    store.assignSideBarData()

    // Set `background: bg-chatgpt-500` on /Kai page for Apple phones
    document.body.style.background = "rgb(52 53 65)"
})
onUnmounted(() => { document.body.style.background = "" })
</script>