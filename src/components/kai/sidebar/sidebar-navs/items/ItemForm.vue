<template>
    <div v-if="!edit"
        class="h-12 flex justify-center items-center gap-3 px-3 rounded-md bg-chatgpt-700 break-all group cursor-pointer">
        <Ellipse :color="props.color" />
        <NavText>{{ props.chat.name }}</NavText>
        <div class="flex items-center gap-2 w-auto">
            <button @click="edit = true" type="button" class="w-4 h-4 hover:opacity-50">
                <ChatEdit />
            </button>
            <!-- <button @click="edit = !edit" type="button" class="w-4 h-4 hover:opacity-50 disabled:opacity-50" disabled>
                <ChatUpload />
            </button> -->
            <button @click="handleModal" type="button" class="w-4 h-4 hover:opacity-50">
                <ChatDelete />
                <DeleteModal v-if="openDeleteModal && props.chat" :chat="props.chat" :handleModal="handleModal" />
            </button>
        </div>
    </div>

    <form v-else class="h-12 flex items-center gap-3 px-3 bg-chatgpt-500 rounded-md" @submit="handleSubmit">
        <Ellipse :color="props.color" />
        <input type="text" :value="navText || props.chat.name" @input="(e: any) => { navText = e.target.value }"
            class="w-full bg-transparent text-sm border border-kraal-blue-500 rounded focus:shadow-none focus:outline-none">
        <!-- Button ✔ -->
        <button class="w-3" type="submit"><i class="fa fa-check w-full"></i></button>
        <!-- Button ❌ -->
        <button @click="edit = false" class="w-3 mx-1" type="button"><i class="fa fa-plus rotate-45 w-full"></i></button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ChatEdit from "../../../../icons/chat-edit.vue"
import ChatDelete from "../../../../icons/chat-delete.vue"
import NavText from "../NavText.vue"
import Ellipse from "./Ellipse.vue"
import DeleteModal from "./DeleteModal.vue"
import { SideBarData } from "../../../../../kraal-api/types.azureAPI"
import { useSideBarStoreAzureStore } from "../../../../../stores/sideBarStoreAzure"

const props = defineProps<{ chat: SideBarData, color: string, id: number }>()
const edit = ref<boolean>(false)
const store = useSideBarStoreAzureStore()
// make chat history to reactive state
const navText = ref<string>(props.chat.name);

function handleSubmit(e: any) {
    e.preventDefault()
    store.editChatName(props.id, navText.value)
    edit.value = false
}

const openDeleteModal = ref<boolean>(false)
function handleModal() {
    openDeleteModal.value = !openDeleteModal.value;
}
</script>
