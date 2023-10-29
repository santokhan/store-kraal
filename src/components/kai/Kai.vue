<template>
    <KraalAILayout>
        <ChatInstance :chatId="id" />
    </KraalAILayout>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"
import ChatInstance from "./instances/Instance.vue"
import { useSideBarStoreAzureStore } from '../../stores/sideBarStoreAzure'
import { useRoute } from "vue-router"
import KraalAILayout from "./KraalAILayout.vue"

const store = useSideBarStoreAzureStore()
const route = useRoute()
const paramsId = route.params.id
const id: number = typeof paramsId === 'string' ? parseInt(paramsId) : parseInt(paramsId[0])

onMounted(() => {
    store.assignChatMessage(id)
})
</script>

