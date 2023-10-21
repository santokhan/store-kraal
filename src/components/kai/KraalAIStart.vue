<template>
    <KraalAILayout>
        <WelcomeChat v-if="recentChatId === 0" />
        <ChatInstance v-else :chatId="recentChatId" />
    </KraalAILayout>
</template>

<script lang="ts" setup>
import WelcomeChat from "./instances/chat-main/WelcomeChat.vue"
import { useSideBarStoreAzureStore } from "../../stores/sideBarStoreAzure"
import { storeToRefs } from "pinia"
import ChatInstance from "./instances/Instance.vue"
import KraalAILayout from "./layout/KraalAILayout.vue";

const store = useSideBarStoreAzureStore()
const { recentChatId } = storeToRefs(store)
</script>