<template>
    <KraalAILayout>
        <WelcomeChat v-if="recentChatId === 0" />
        <ChatInstance v-else :chatId="recentChatId" />
        <QuestionIcon />
    </KraalAILayout>
</template>

<script lang="ts" setup>
import { watch } from "vue";
import WelcomeChat from "./instances/chat-main/WelcomeChat.vue"
import QuestionIcon from './instances/QuestionIcon.vue'
import { useSideBarStoreAzureStore } from "../../stores/sideBarStoreAzure"
import { storeToRefs } from "pinia"
import ChatInstance from "./instances/Instance.vue"
import KraalAILayout from "./layout/KraalAILayout.vue";

const store = useSideBarStoreAzureStore()
const { recentChatId } = storeToRefs(store)

watch(recentChatId, () => {
    console.log(recentChatId.value);
})
</script>