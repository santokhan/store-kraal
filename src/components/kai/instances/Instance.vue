<template>
    <!-- !Do not use parent div in this instance -->
    <div ref="chatMain" class="h-full overflow-y-auto text-white">
        <div class="relative text-gray-200">
            <template v-for="chat in chatMessages">
                <div v-if="chat.author === chat_user[0]" class="border-b border-gray-800">
                    <div class="flex gap-4 max-w-4xl mx-auto px-4 py-7 text-sm tracking-wider font-light text-white">
                        <div v-if="userData"
                            class="w-[1.95rem] min-w-[1.95rem] h-[1.95rem] text-gray-200 border grid place-items-center rounded-full">
                            {{ generate_icon(userData) }}
                        </div>
                        {{ chat.message }}
                    </div>
                </div>
                <div v-if="chat.author === chat_user[1]" class="bg-chatgpt-400 border-b border-gray-800">
                    <div class="max-w-4xl mx-auto px-4 py-7 flex gap-4 items-start w-full font-light">
                        <Kraalai class="w-[1.95rem] min-w-[1.95rem] text-gray-400" />
                        <RobotWriter v-if="chat.typewriter" :robot="chat.message" :eleScrollTop="eleScrollTop" />
                        <RobotStatic v-else :robot="chat.message" />
                    </div>
                </div>
            </template>
        </div>
    </div>
    <ChatFooter :chatId="props.chatId" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ChatFooter from "../chat-footer/ChatFooter.vue";
import UserIcon from '../../icons/user-pro.vue';
import RobotWriter from "../typewriter/robot-writer/RobotWriter.vue";
import { useSideBarStoreAzureStore } from "../../../stores/sideBarStoreAzure";
import { storeToRefs } from "pinia";
import RobotStatic from "../typewriter/robot-writer/RobotStatic.vue";
import Kraalai from "../../icons/kraalai.vue";
import { businessUserInfo } from "../../../firebase/read.business.user";
import { generate_icon } from "../sidebar/sidebar-data";

const props = defineProps<{ chatId: any }>()
const store = useSideBarStoreAzureStore()
const { chatMessages } = storeToRefs(store)
const chat_user = ["User", "Bot"]
const userData = ref<any>()
const chatMain = ref<any>(null);
// Will be called on typewriter
function eleScrollTop() {
    const ele: HTMLElement = chatMain.value;
    const rect = ele.getBoundingClientRect();
    ele.scrollTop += rect.height;
}
onMounted(() => {
    businessUserInfo.getUserData(async (data) => {
        if (!data) return;
        userData.value = data
    })
})
</script>
