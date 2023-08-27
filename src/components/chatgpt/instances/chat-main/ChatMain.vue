<template>
  <div ref="chatMain" class="h-full overflow-auto text-white">
    <div
      v-if="props.database.length === 0"
      class="max-w-4xl mx-auto px-4 pt-24 flex justify-center"
    >
      <div class="relative w-80"><Models /></div>
    </div>

    <div v-for="(chat, i) in props.database" :key="i" data-title="chat list">
      <ChatUser :key="i" :data="chat.user" :eleScrollTop="eleScrollTop" />
      <ChatRobot :key="i" :data="chat.robot" :eleScrollTop="eleScrollTop" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ChatUser from "./chat-user/ChatUser.vue";
import ChatRobot from "./users/ChatRobot.vue";
import Models from "../../../kai/instances/chat-main/models/Models.vue";

const props = defineProps<{ database: any }>();

const chatMain: any = ref(null);
// Will be called on typewriter
function eleScrollTop() {
  const ele = chatMain.value;
  const rect = ele.getBoundingClientRect();
  ele.scrollTop += rect.height;
}
</script>
