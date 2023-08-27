<template>
  <div ref="chatMain" class="h-full overflow-y-auto text-white">
    <RobotRes1 :eleScrollTop="eleScrollTop" />
    <div v-if="props.inputText[0]">
      <ChatUser>{{ props.inputText[0] }}</ChatUser>
      <RobotResReport :eleScrollTop="eleScrollTop" />
    </div>
    <div v-if="props.inputText[1]">
      <ChatUser>{{ props.inputText[1] }}</ChatUser>
      <RobotRes4 :eleScrollTop="eleScrollTop" :inputText="props.inputText[1] || ''" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ChatUser from "./chat-user/ChatUser.vue";
import RobotResReport from "./users/RobotResReport.vue";
import RobotRes1 from "./users/RobotRes1.vue";
import RobotRes4 from "./users/RobotRes4.vue";

const props: any = defineProps({ inputText: Object });

const chatMain: any = ref(null);
// Will be called on typewriter
function eleScrollTop() {
  const ele = chatMain.value;
  const rect = ele.getBoundingClientRect();
  ele.scrollTop += rect.height;
}
</script>
