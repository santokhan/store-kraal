<template>
    <KraalAILayout>
        <ChatInstance :chatId="id" />
        <QuestionIcon />
    </KraalAILayout>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"
import ChatInstance from "./instances/Instance.vue"
import { useSideBarStoreAzureStore } from '../../stores/sideBarStoreAzure'
import QuestionIcon from './instances/QuestionIcon.vue'
import { useRoute } from "vue-router"
import KraalAILayout from "./layout/KraalAILayout.vue"

const store = useSideBarStoreAzureStore()

const route = useRoute()
const paramsId = route.params.id
const id: number = typeof paramsId === 'string' ? parseInt(paramsId) : parseInt(paramsId[0])

onMounted(() => {
    store.assignChatMessage(id)
})
</script>

<style scoped></style>
