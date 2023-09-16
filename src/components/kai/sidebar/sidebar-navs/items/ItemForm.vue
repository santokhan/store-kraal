<template>
    <form v-if="edit" class="h-12 flex items-center gap-3 px-3 bg-chatgpt-500 rounded-md" @submit="handleSubmit">
        <Ellipse :color="props.color" />
        <input type="text" :value="navText || props.chat.name" @input="(e: any) => { navText = e.target.value }"
            class="w-full bg-transparent text-sm border border-kraal-blue-500 rounded focus:shadow-none focus:outline-none">
        <!-- Button ✔ -->
        <button class="w-3" type="submit"><i class="fa fa-check w-full"></i></button>
        <!-- Button ❌ -->
        <button @click="edit = false" class="w-3 mx-1" type="button"><i class="fa fa-plus rotate-45 w-full"></i></button>
    </form>

    <div v-else
        class="h-12 flex justify-center items-center gap-3 px-3 rounded-md bg-chatgpt-700 break-all group cursor-pointer">
        <Ellipse :color="props.color" />
        <NavText>{{ props.chat.name }}</NavText>
        <div class="grid grid-cols-3 w-[11rem]">
            <button @click="edit = true" type="button" class="w-full h-full p-1 hover:opacity-50">
                <ChatEdit />
            </button>
            <button @click="store.forwardMessage(props.chat.id)" type="button" class="w-full h-full p-1 hover:opacity-50">
                <ChatUpload />
            </button>
            <button @click="store.deleteMessage(props.chat.id, props.chat.id)" type="button"
                class="w-full h-full p-1 hover:opacity-50">
                <ChatDelete />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useChatSideBarStore } from "../../../../../stores/chatSideBar";
import ChatEdit from "../../../../icons/chat-edit.vue";
import ChatUpload from "../../../../icons/chat-upload.vue";
import ChatDelete from "../../../../icons/chat-delete.vue";
import Chat from "../../../../icons/chat.vue";
import NavText from "../NavText.vue";
import { ChatList } from "../../../../../stores/chatSideBarTypes";
import { SideBarData } from "../../../../../kraal-api/types.azureAPI";
import Ellipse from "./Ellipse.vue";

const props = defineProps<{ chat: SideBarData, color: string }>()
const edit = ref<boolean>(false)
const store = useChatSideBarStore()
// make chat history to reactive state
const navText = ref<string>(props.chat.name);

function handleSubmit(e: any) {
    e.preventDefault();
    // change the nav text on submit
    store.editMessage(props.chat.id, navText.value, "props.chat.id")
    // set active nav item false, set edit status false
    edit.value = false;
}
</script>

<style scoped></style>