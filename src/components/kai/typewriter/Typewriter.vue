<template>
    <div class="relative typewriter text-gray-200 pt-12">
        <!-- <div v-html="code" class="text-gray-200 space-y-4"></div> -->
        <div v-for="(chat, index) in chatList" :key="index" class="">
            <div class="border-b border-gray-800">
                <div class="flex gap-4 max-w-4xl mx-auto py-7">
                    <User class="w-6 min-w-[1.5rem] text-gray-400" />{{ chat.user }}
                </div>
            </div>
            <!-- <RobotWriter :robot="chat.robot" /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useChatSideBarStore } from '../../../stores/chatSideBar';
import User from '../../icons/user.vue';

const store = useChatSideBarStore()
const chatList = ref<any[]>([])

watchEffect(() => { chatList.value = store.getActiveChatList()[0].chats || [] })
</script>

<style scoped></style>
