<template>
    <div class="relative h-full w-full flex-1 items-start border-white/20 overflow-y-auto -mr-2 scrollbar-dark">
        <!-- Loop for sidebar legends array -->
        <div v-for="(obj, index) in store.sidebarNavs" :key="index">
            <Legend v-if="obj.navs.length > 0">{{ obj.time }}</Legend>

            <!-- Loop for sidebar navs -->
            <div v-for="(nav, i) in obj.navs" :key="i" class="text-white">
                <!-- If editindex `"editIndex === nav.id"` show nav editing form [__], Else show sidebar navs -->
                <form v-if="editIndex === nav.id" class="h-12 flex items-center gap-3 px-3 bg-chatgpt-700 rounded-md"
                    @submit.prevent="() => {
                        // change the nav text on submit
                        store.editMessage(nav.id, navText || nav.content)

                        // set active nav item false, set edit status false
                        editIndex = 0;
                        store.setActiveIndex(0)
                    }
                    ">
                    <Chat class="w-4 min-w-[16px]" />
                    <input type="text" :value="nav.content" @input="(e: any) => { navText = e.target.value }"
                        class="w-full bg-transparent text-sm border border-kraal-blue-500 rounded focus:shadow-none focus:outline-none">
                    <button class="text-gray-400" type="submit"><i class="fa fa-check"></i></button>
                    <button @click="() => { editIndex = 0; store.setActiveIndex(0) }" class="text-gray-400" type="button"><i
                            class="fa fa-plus rotate-45"></i></button>
                </form>
                <!-- Active Nav Item, edit buttons will work here -->
                <div v-else-if="store.activeNavIndex === nav.id"
                    class="h-12 flex justify-center items-center gap-3 px-3 rounded-md bg-chatgpt-700 break-all group cursor-pointer">
                    <Chat class="w-4 min-w-[16px]" />
                    <NavText>{{ nav.content }}</NavText>
                    <button @click="editIndex = nav.id">
                        <ChatEdit class="w-4" />
                    </button>
                    <button @click="store.forwardMessage(nav.id)">
                        <ChatUpload class="w-4" />
                    </button>
                    <button @click="store.deleteMessage(nav.id)">
                        <ChatDelete class="w-4" />
                    </button>
                </div>
                <!-- Initial Nav Item -->
                <div v-else @click="() => {
                    store.setActiveIndex(nav.id);
                    editIndex = 0;
                }"
                    class="h-12 flex justify-center items-center gap-3 px-3 rounded-md hover:bg-chatgpt-700 break-all bg-chatgpt-600 group cursor-pointer">
                    <Chat class="w-4 min-w-[16px]" />
                    <div class="w-full text-sm text-white block flex-grow-0 relative overflow-hidden whitespace-nowrap">
                        {{ nav.content }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatEdit from '../../../icons/chat-edit.vue';
import ChatUpload from '../../../icons/chat-upload.vue';
import ChatDelete from '../../../icons/chat-delete.vue';
import Chat from '../../../icons/chat.vue';
import NavText from './NavText.vue';
import Legend from '../Legend.vue';
import { useChatSideBarStore } from '../../../../stores/chatSideBar';

const store = useChatSideBarStore()

// edit index will open editor for sidebar nav text
// edit index only available inside sidebar components
const editIndex = ref<number>(0)
// make chat history to reactive state
const navText = ref<string>("");
</script>

