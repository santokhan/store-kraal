<template>
  <ChatContainer :robot="false">
    <Profile>
      <div
        :class="`w-full h-full rounded-full border-2 flex justify-center items-center font-semibold`"
      >
        {{ formData.answers.d.toUpperCase() || "NA" }}
      </div>
    </Profile>
    <ChatText><slot></slot></ChatText>
  </ChatContainer>
</template>

<script lang="ts" setup>
import { useFormDataStore } from "../../../../../stores/FormData";
import ChatText from "../ChatText.vue";
import ChatContainer from "../users/ChatContainer.vue";
import Profile from "../users/Profile.vue";

const formData: any = useFormDataStore();
</script>
