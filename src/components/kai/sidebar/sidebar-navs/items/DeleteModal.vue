<template>
    <teleport to='body'>
        <div class="fixed left-0 top-0 w-full h-screen flex justify-center items-center z-[51] bg-black/10">
            <div class="w-full max-w-lg text-gray-400 bg-chatgpt-600 rounded-xl shadow-lg">
                <div class="flex justify-between items-center p-4">
                    <p class="font-medium text-sm select-none">
                        Delete Chat "<span class="select-text">
                            {{ props.chat.name.split(' ').slice(0, 5).join(" ") }}...
                        </span>"
                    </p>
                    <button type="button" class="text-gray-500 hover:text-gray-200" @click="props.handleModal">
                        <i class="fa fa-plus rotate-45" aria-hidden="true"></i>
                    </button>
                </div>
                <hr class="border-gray-700">
                <div class="flex flex-col items-center gap-4 py-10">
                    <Kraal class="w-20 select-none" />
                    <h2 class="w-full text-2xl font-semibold text-center select-none">Are you sure to delete?</h2>
                </div>
                <hr class="border-gray-700">
                <form @submit="handleSubmit">
                    <div class="space-y-2 p-4">
                        <label for="chatName" class="font-medium text-sm select-none">
                            To confirm type "<span class="select-text">
                                {{ props.chat.name.split(' ').slice(0, 5).join(" ") }}...
                            </span>" in the box below
                        </label>
                        <input type="text" name="chat_name" id="chatName" v-model="name"
                            class="block px-3 w-full h-9 text-gray-400 text-base rounded-lg border bg-transparent outline-none border-orange-900 text-sm hover:border-orange-800">
                        <div v-if="err" class="text-sm flex items-center gap-1 text-orange-700">
                            <i class="fa fa-info-circle"></i>Typing error. Check again.
                        </div>
                        <button type="submit" :disabled="name ? false : true" :class="[
                            'w-full h-9 bg-chatgpt-700 text-orange-900 text-center rounded-lg font-medium flex justify-center items-center',
                            'enabled:hover:bg-orange-900 enabled:hover:text-gray-100']">
                            <Spinner v-if="loading" /><span v-else>Delete this chat</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Kraal from '../../../../icons/kraal.vue';
import Spinner from "./Spinner.vue";
import { useRouter } from "vue-router";
import { useSideBarStoreAzureStore } from "../../../../../stores/sideBarStoreAzure";

const props = defineProps<{
    chat: any,
    handleModal: () => void
}>()

const name = ref<string>("")
const err = ref<boolean>(false)
const loading = ref<boolean>(false)
const store = useSideBarStoreAzureStore()
const router = useRouter()

async function handleSubmit(e: any) {
    e.preventDefault()
    const filtered = name.value.trim().replace(/\s\s/g, " ").toLowerCase()
    const target = props.chat.name.trim().toLowerCase()
    // console.log(filtered, "===", target);
    if (target.includes(filtered)) {
        loading.value = true

        await store.deleteSideBarInstance(props.chat.id)

        // navigate to welcome page when chat delete
        router.push("/kraalai")
    } else { err.value = true }
}

// on input change
watch(name, () => { err.value = false })
</script>
