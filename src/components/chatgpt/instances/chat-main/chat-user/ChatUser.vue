<template>
  <ChatContainer :robot="false">
    <Profile user="man" />
    <ChatText>{{ props.data }}</ChatText>
  </ChatContainer>
</template>

<script lang="ts" setup>
import { useFormDataStore } from "../../../../../stores/FormData";
import ChatText from "../ChatText.vue";
import ChatContainer from "../users/ChatContainer.vue";
import Profile from "../users/Profile.vue";

const formData: any = useFormDataStore();

const props = defineProps<{ data: string }>();
</script>
