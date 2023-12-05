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
                    <h2 class="w-full text-xl font-semibold text-center select-none">Are you sure to delete?</h2>
                </div>
                <hr class="border-gray-700">
                <div class="p-3">
                    <button type="submit" @click="handleDelete" :class="[
                        'w-full h-10 rounded-lg', 'text-center text-gray-200 font-medium text-sm',
                        'flex justify-center items-center', 'bg-chatgpt-500 hover:bg-chatgpt-400'
                    ]">
                        <Spinner v-if="loading" /><span v-else>Delete this chat</span>
                    </button>
                </div>
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

async function handleDelete() {
    loading.value = true

    await store.deleteSideBarInstance(props.chat.id)

    loading.value = false;
    // navigate to welcome page when chat delete
    router.push("/kraalai")
}

// on input change
watch(name, () => { err.value = false })
</script>
