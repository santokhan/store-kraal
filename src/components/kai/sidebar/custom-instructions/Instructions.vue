<template>
    <div class="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-white/10">
        <div class="flex">
            <div class="flex items-center">
                <div class="flex flex-col gap-1 text-center sm:text-left">
                    <h2 class="text-lg font-medium leading-6">
                        Introducing Custom Instructions
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="p-4 sm:p-6 sm:pt-4">
        <div class="mb-6 flex flex-col gap-3">
            <p>
                Customize your interactions with ChatGPT by providing specific details and guidelines for
                your chats.
            </p>
            <p>
                Whenever you edit your custom instructions, they'll take effect in all new chats you
                create. Existing chats won't be updated.
            </p>
        </div>
        <div class="flex flex-col gap-3 text-sm text-gray-400">
            <p>
                Your instructions will be used to make our models better unless you've opted out and may
                be shared with any plugins you've enabled. Visit our <a href="" class="underline"
                    rel="noopener noreferrer">Help Center</a> to learn more.
            </p>
        </div>
        <div class="mt-5 sm:mt-4">
            <div class="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse"><button @click="props.handleFormIsOpen"
                    class="h-10 px-4 text-chatgpt-600 font-semibold rounded-lg bg-gray-400 hover:bg-gray-500">Save</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ handleFormIsOpen: () => void }>()
</script>
