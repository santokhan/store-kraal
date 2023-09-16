<template>
  <div ref="chatMain" class="h-full overflow-auto text-white">
    <div v-if="chatStore.database.length === 0" class="max-w-4xl mx-auto px-4 pt-24 flex justify-center">
      <div class="relative w-80">
        <Models />
      </div>
    </div>

    <div class="relative typewriter text-gray-200 pt-12">
      <!-- <div v-html="code" class="text-gray-200 space-y-4"></div> -->
      <div v-for="(chat, index) in chatList" :key="index" class="">
        <div class="border-b border-gray-800">
          <div class="flex gap-4 max-w-4xl mx-auto px-4 py-7">
            <User class="w-6 min-w-[1.5rem] text-gray-400" />{{ chat.user }}
          </div>
        </div>
        <div class="bg-chatgpt-400 border-b border-gray-800">
          <div class="max-w-4xl mx-auto px-4 py-7 flex gap-4 items-start w-full overflow-auto">
            <RobotWriter :robot="chat.robot" :eleScrollTop="eleScrollTop" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import Models from "./models/Models.vue";
import useChatInstanceStore from "../../../../stores/chatInstance";
import RobotWriter from "../../typewriter/robot-writer/RobotWriter.vue";
import { useChatSideBarStore } from "../../../../stores/chatSideBar";
import User from '../../../icons/user-pro.vue';

const chatStore = useChatInstanceStore()
const store = useChatSideBarStore()

const chatMain: any = ref(null);
// Will be called on typewriter
function eleScrollTop() {
  const ele = chatMain.value;
  const rect = ele.getBoundingClientRect();
  ele.scrollTop += rect.height;
}

const chatList = ref<any[]>([])
watchEffect(() => {
  chatList.value = store.getActiveChatList()[0].chats || []
})
</script>
