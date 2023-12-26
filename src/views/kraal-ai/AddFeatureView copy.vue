<template>
    <FixedContainer class="bg-[#343541] text-gray-100">
        <header :class="['px-4 py-2 border-b border-gray-600', 'flex justify-between items-center']">
            <div class="w-full">
                <BackButton />
            </div>
            <div>
                <h5 class="font-medium whitespace-nowrap">New feature</h5>
            </div>
            <div class="w-full flex items-center justify-end">
                <button type="button"
                    class="text-white bg-kraal-purple-500 hover:bg-kraal-purple-500/80 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">Create</button>
            </div>
        </header>
        <main class="w-full flex">
            <div :class="['w-full px-4 lg:px-6 py-12 grid place-items-center']">
                <div class="w-full max-w-md space-y-4">
                    <!-- <div class="space-y-4">
                        <p>Hi friend I will help you.Add a new feature. Click the Listen button below.</p>
                        <p>
                            Then you can say something like "make all AI, automate the monthly marketing analytics report by
                            taking data from.Salesforce add for the last month and putting it excel and analyzing it to
                            generate a report with graph. Do it every first Monday of the new month."
                        </p>
                        <p>What would you like to make?</p>
                    </div> -->
                    <div class="grid place-items-center bg- [#181A1C] w-full aspect-square rounded-full">
                        <VoiceInput />
                    </div>
                    <div class="grid place-items-center">
                        <button type="button" @click="openForm = !openForm"
                            class="text-white bg-kraal-purple-500 hover:bg-kraal-purple-500/80 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">Listen</button>
                    </div>
                </div>
            </div>
            <div v-if="openForm" :class="['w-full px-4 lg:px-6 py-12', 'border-l border-gray-600']">
                <form class="rounded-lg space-y-12" @submit="handle_form_submit">
                    <div class="grid gap-6">
                        <div class="">
                            <label for="first-name" class="block text-sm font-medium leading-6">Name</label>
                            <div class="mt-2">
                                <input type="text" name="first-name" id="first-name" placeholder="Name your GPT"
                                    v-model="state.name"
                                    class="block w-full bg-transparent text-gray-100 rounded-md border border-gray-600 px-2 py-1.5 shadow-sm focus:outline-none placeholder:text-gray-500 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="">
                            <label for="last-name" class="block text-sm font-medium leading-6">Description</label>
                            <div class="mt-2">
                                <input type="text" name="last-name" id="last-name" v-model="state.desc"
                                    placeholder="Add is short description about what this GPT does"
                                    class="block w-full bg-transparent text-gray-100 rounded-md border border-gray-600 px-2 py-1.5 shadow-sm focus:outline-none placeholder:text-gray-500 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="">
                            <label for="country" class="block text-sm font-medium leading-6">Conversation
                                starter</label>
                            <div class="mt-2">
                                <select id="country" name="country" autocomplete="country-name"
                                    class="block w-full bg-[#343541] text-gray-100 rounded-md border border-gray-600 px-2 py-1.5 shadow-sm focus:outline-none text-sm sm:leading-6">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                        <div class="">
                            <label for="about" class="block text-sm font-medium leading-6">Instructions</label>
                            <div class="mt-2">
                                <textarea rows="4" name="description"
                                    placeholder="What does this GPT do? How does it behave? What should it avoid doing?"
                                    class="w-full bg-transparent text-gray-100 rounded-xl px-3 py-2 placeholder:text-gray-500 text-sm border border-gray-600 focus:outline-none"
                                    spellcheck="false"></textarea>
                            </div>
                        </div>
                        <div class="space-y-3">
                            <h2 class="text-base font-semibold leading-7">Knowledge</h2>
                            <p class="text-sm leading-6">
                                Conversation with your GPT may include file contents. The file can be downloaded when
                                the code interpreter is enabled.
                            </p>
                            <p class="text-sm leading-6">
                                The following files are only available for code interpreters.
                            </p>
                            <div class="flex flex-wrap gap-4 py-1" v-if="fileInput">
                                <template v-for="(item, index) in fileInput" :key="index">
                                    <Preview :file="item" :i="index" :removeFiles="removeFiles"></Preview>
                                </template>
                            </div>
                            <div class="">
                                <button type="button"
                                    class="relative overflow-hidden text-gray-100 hover:text- white border border-gray-600 hover:bg-kraal-purple-500 font-medium rounded-lg text-sm px-5 py-2.5">
                                    <span class="relative">Upload files</span>
                                    <input class="absolute w-full inset-0 opacity-0" id="file_input" type="file"
                                        @change="handleFiles">
                                </button>
                            </div>
                        </div>

                        <fieldset class="space-y-2">
                            <legend class="text-sm font-medium leading-6">Capabilities</legend>
                            <template v-for="item, i in checkList" :key="i">
                                <Check v-if="item" :title="item" :index="i" :handleChecked="checkbox_clicked" />
                            </template>
                        </fieldset>

                        <div class="grid gap-2">
                            <h5 class="text-sm font-medium leading-6">Actions</h5>
                            <div class="">
                                <button type="submit"
                                    class="text-gray-100 border border-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-kraal-purple-500">
                                    Create new action
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </FixedContainer>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Check from '../../components/kai/sidebar/right/rag/input/Check.vue';
import VoiceInput from '../../components/kai/sidebar/right/modals/buddy/voice-input/VoiceInput.vue';
import FixedContainer from '../../components/shared/container/FixedContainer.vue';
import Preview from '../../components/kai/instances/chat-main/attachment/Preview.vue';
import BackButton from '../../components/button/BackButton.vue';

const checkList = ["Web Browsing", "DALL-E Image Generation", "Code Interpreter"];
const checkState = reactive(checkList.map(e => false));
const state = reactive<{ name: string, desc: string }>({ name: "", desc: "" })
const fileInput = ref<File[]>([]);
const openForm = ref<boolean>(false);

function handleFiles(e: any) {
    const { files } = e.target;
    for (const file of files) {
        fileInput.value.push(file)
    }
}
function removeFiles(index: number) {
    fileInput.value.splice(index, 1)
}

function checkbox_clicked(index: number) {
    checkState[index] = !checkState[index];
}

async function handle_form_submit(e: any) {
    e.preventDefault();
    const formData = new FormData()

    formData.append("name", state.name)
    formData.append("description", state.desc)
    for (const file of fileInput.value) {
        formData.append("file", file);
    }

    formData.forEach(e => {
        console.log(e);
    })
    // await fetch()
}
</script>

<style scoped></style>