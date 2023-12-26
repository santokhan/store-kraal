<template>
    <div class="fixed inset-0 h-screen overflow-auto bg-gray-800+ bg-[#343541] text-gray-100">
        <header class="px-4 py-2 border-b border-gray-600 flex justify-between items-center">
            <div>
                <BackButton />
            </div>
            <button type="button" @click="submitFiles" :disabled="!allFilesTagged"
                :class="{ 'bg-blue-600 hover:bg-blue-700': allFilesTagged, 'bg-gray-400 cursor-not-allowed': !allFilesTagged }"
                class="text-white font-medium rounded-lg text-sm px-4 py-2 focus:outline-none shadow-lg relative group">
                Submit
                <!-- Conditional Tooltip -->
                <div v-if="!allFilesTagged"
                    class="invisible group-hover:visible absolute bg-black text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 -mb-2 z-10">
                    All files must be tagged before submitting
                </div>
            </button>
        </header>
        <main class="grid lg:grid-cols-2 h-full">
            <div class="w-full px-4 lg:px-6 py-10 flex justify-center">
                <div class="w-full max-w-screen-sm space-y-6">
                    <div @drop.prevent="handleDrop" @dragover.prevent="dragOver" @dragleave.prevent="dragLeave"
                        :class="['border-2 rounded-xl p-4 text-center', isDragOver ? 'border-blue-500 bg-blue-100' : 'border-gray-600']"
                        class="relative h-48">
                        <p>Drag and drop files here or click to upload</p>
                        <input type="file" id="file-upload" @change="handleFileInput" multiple class="hidden">
                        <label for="file-upload" class="cursor-pointer absolute bottom-2 left-2">
                            <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 fill-current text-gray-400 hover:text-gray-200">
                                <!-- SVG Path Here -->
                                <g>
                                    <path
                                        d="m26.354 6.218-4.572-4.572a.5.5 0 0 0 -.353-.146h-10.836a1.551 1.551 0 0 0 -1.55 1.55v.507h-.507a1.551 1.551 0 0 0 -1.55 1.55v5.393h-1.986a3.5 3.5 0 0 0 0 7h1.986v5.914a3.09 3.09 0 0 0 3.086 3.086h12.821a1.551 1.551 0 0 0 1.549-1.55v-.507h.508a1.551 1.551 0 0 0 1.55-1.55v-16.322a.5.5 0 0 0 -.146-.353zm-4.425-3.011 2.864 2.864h-2.864zm-13.943 1.9a.551.551 0 0 1 .55-.55h.507v5.943h-1.057zm15.456 19.843a.551.551 0 0 1 -.549.55h-12.821a2.089 2.089 0 0 1 -2.086-2.086v-5.914h1.057v5.393a1.551 1.551 0 0 0 1.55 1.55h12.849zm1.508-1.507h-14.357a.551.551 0 0 1 -.55-.55v-5.393h5.957a2.5 2.5 0 0 0 0-5h-10a1.5 1.5 0 0 0 0 3h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 1 0-1h10a1.5 1.5 0 0 1 0 3h-11a2.5 2.5 0 0 1 0-5h12a3.5 3.5 0 0 1 0 7h-5a.5.5 0 0 0 0 1h5a4.5 4.5 0 0 0 0-9h-6.957v-7.45a.551.551 0 0 1 .55-.55h10.336v4.071a.5.5 0 0 0 .5.5h4.071v15.822a.551.551 0 0 1 -.55.55z" />
                                </g>
                            </svg>
                        </label>
                    </div>
                    <div v-if="fileInput.length > 3" class="flex items-center mb-4">
                        <input type="checkbox" id="tag-all-checkbox" v-model="tagAllSelected" @change="handleTagAllChange"
                            class="mr-2">
                        <label for="tag-all-checkbox" class="mr-2">Tag All</label>
                        <select v-model="bulkTag" class="ml-auto bg-gray-700 text-white rounded p-1" @change="applyBulkTag">
                            <option disabled value="">Select a tag</option>
                            <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
                        </select>
                    </div>
                    <div v-if="fileInput.length > 0" class="space-y-3">
                        <div v-for="(file, index) in fileInput" :key="index"
                            class="flex items-center bg-gray-700 p-2 rounded justify-between">
                            <div class="flex items-center">
                                <input type="checkbox" v-model="file.selected" class="mr-2">
                                <span class="truncate max-w-xs" :title="file.file.name">{{ file.file.name }}</span>
                            </div>
                            <div class="flex items-center">
                                <select v-model="file.tag" class="bg-gray-800 text-white rounded p-1 ml-2">
                                    <option disabled value="">Select a tag</option>
                                    <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
                                </select>
                                <button @click="removeFile(index)" class="ml-2 p-1" title="Delete">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 fill-current text-gray-400 hover:text-gray-200">
                                        <!-- SVG Path Here -->
                                        <g>
                                            <path
                                                d="m16 2a14 14 0 1 0 14 14 14 14 0 0 0 -14-14zm0 26a12 12 0 1 1 12-12 12 12 0 0 1 -12 12zm5.71-16.29-4.3 4.29 4.3 4.29a1 1 0 0 1 0 1.42 1 1 0 0 1 -1.42 0l-4.29-4.3-4.29 4.3a1 1 0 0 1 -1.42 0 1 1 0 0 1 0-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l4.29 4.3 4.29-4.3a1 1 0 0 1 1.42 1.42z" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Feedback Message and Loading Indicator -->
                <div v-if="feedbackMessage" class="text-center py-2 text-white relative">
                    {{ feedbackMessage }}
                    <button @click="clearFeedback" class="absolute right-0 top-0 p-2">
                        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 fill-current text-gray-400 hover:text-gray-200">
                            <!-- SVG Path Here -->
                            <g>
                                <path
                                    d="m16 2a14 14 0 1 0 14 14 14 14 0 0 0 -14-14zm0 26a12 12 0 1 1 12-12 12 12 0 0 1 -12 12zm5.71-16.29-4.3 4.29 4.3 4.29a1 1 0 0 1 0 1.42 1 1 0 0 1 -1.42 0l-4.29-4.3-4.29 4.3a1 1 0 0 1 -1.42 0 1 1 0 0 1 0-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l4.29 4.3 4.29-4.3a1 1 0 0 1 1.42 1.42z" />
                            </g>
                        </svg>
                    </button>
                </div>
                <div v-if="isLoading" class="text-center py-2">
                    <span>Loading...</span>
                </div>
            </div>
            <!-- Right Section: Search Functionality -->
            <div class="px-4 lg:px-6 py-10 flex flex-col items-center border-l border-gray-600">
                <div class="w-full max-w-screen-sm relative">
                    <input type="search" placeholder="Search Ragna" v-model="searchQuery" @keyup.enter="performSearch"
                        class="w-full bg-transparent py-3 pl-4 pr-10 placeholder:text-gray-500 text-sm border border-gray-500 rounded focus:outline-none">
                    <svg @click="performSearch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"
                        class="h-5 w-5 fill-current text-gray-400 hover:text-gray-200 cursor-pointer absolute right-3 top-3">
                        <path
                            d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                        </path>
                    </svg>
                    <!-- Display Search Results -->
                    <div class="mt-4 bg-gray-700 p-4 rounded">
                        <p v-if="searchResult">{{ searchResult }}</p>
                        <p v-else class="text-gray-500 text-sm">...I'm waiting to be found</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import BackButton from '../../components/button/BackButton.vue';
// Import Axios once we have real API to use
// import axios from 'axios';

const fileInput = ref<any[]>([]);
const tags: string[] = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'];
const searchQuery = ref<string>('');
const searchResult = ref<string>('');
const isDragOver = ref<boolean>(false);
const bulkTag = ref<string>('');
const isLoading = ref<boolean>(false);
const feedbackMessage = ref<string>('');
const feedbackTimeout = ref<any>(null);
const tagAllSelected = ref<boolean>(false);
const allFilesTagged = computed<boolean>(() => fileInput.value.length > 0 && fileInput.value.every(file => file.tag));

onMounted(() => {
    try {
        const savedFiles = localStorage.getItem('savedFiles');
        if (savedFiles) {
            const parsedFiles = JSON.parse(savedFiles);
            fileInput.value = parsedFiles.map((f: any) => ({
                ...f,
                file: {
                    name: f.name
                },
                selected: false
            }));
        }
    } catch (error) {
        console.error('Error loading files from localStorage:', error);
    }
});

function handleFileInput(event: any) {
    addFiles(event.target.files);
}

function handleDrop(event: any) {
    addFiles(event.dataTransfer.files);
    isDragOver.value = false; // Reset the dropzone color
}

function addFiles(files: any[]) {
    let fileAdded = false;
    for (let file of files) {
        if (!fileInput.value.some(f => f.file.name === file.name)) {
            fileInput.value.push({
                file: {
                    name: file.name
                },
                tag: '',
                selected: false
            });
            fileAdded = true;
        }
    }
    if (fileAdded) {
        saveFiles(); // Save files to localStorage
    }
}

function saveFiles() {
    try {
        const filesToSave = fileInput.value.map(f => ({
            name: f.file.name,
            tag: f.tag
        }));
        localStorage.setItem('savedFiles', JSON.stringify(filesToSave));
    } catch (error) {
        console.error('Error saving files to localStorage:', error);
    }
}

function handleTagAllChange() {
    fileInput.value.forEach(file => file.selected = tagAllSelected.value);
}

function applyBulkTag() {
    if (bulkTag.value) {
        fileInput.value.forEach(file => {
            if (file.selected) {
                file.tag = bulkTag.value;
            }
        });
        bulkTag.value = ''; // Reset the bulk tag selection
    }
}
// Watch for changes in fileInput to update the tagAllSelected state
watch(fileInput, (newFileInput) => {
    tagAllSelected.value = newFileInput.length > 0 && newFileInput.every(file =>
        file.selected);
}, { deep: true });

function removeFile(index: number) {
    fileInput.value.splice(index, 1);
    saveFiles(); // Save the updated state to localStorage
}

function dragOver() {
    isDragOver.value = true;
}

function dragLeave() {
    isDragOver.value = false;
}

function performSearch() {
    searchResult.value = "Ragna: " + searchQuery.value;
}
// Function to simulate file submission with error handling

function submitFiles() {
    if (allFilesTagged.value) {
        isLoading.value = true;
        feedbackMessage.value = '';
        // Simulate file submission
        new Promise((resolve, reject) => {
            setTimeout(() => {
                // Randomly determine success or failure
                if (Math.random() > 0.5) {
                    resolve('Files successfully submitted.');
                } else {
                    // Provide a mock error message
                    reject('Submission failed due to network error.');
                }
            }, 2000);
        }).then((response: any) => {
            feedbackMessage.value = response;
            fileInput.value = [];
            localStorage.removeItem('savedFiles');
            setFeedbackTimeout();
        }).catch(error => {
            feedbackMessage.value = `Error: ${error}`;
            setFeedbackTimeout();
        }).finally(() => {
            isLoading.value = false;
        });
        // For actual API call, replace the above with:
        // axios.post('YOUR_API_ENDPOINT', formData)
        //   .then(response => {
        //     feedbackMessage.value = 'Files successfully submitted.';
        //     setFeedbackTimeout();
        //     // ...other success handling...
        //   })
        //   .catch(error => {
        //     feedbackMessage.value = `Error: ${error.message}`;
        //     setFeedbackTimeout();
        //     // ...other error handling...
        //   });
    }
}

function clearFeedback() {
    feedbackMessage.value = '';
    clearTimeout(feedbackTimeout.value);
}

function setFeedbackTimeout() {
    feedbackTimeout.value = setTimeout(() => {
        clearFeedback();
    }, 10000); // Dismiss after 10 seconds
}
</script>

<style scoped>
/* Add your Tailwind CSS styles here if needed */
/* Custom Tooltip Style */
[title] {
    position: relative;
}

[title]:hover::after {
    content: attr(title);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 0.5em;
    border-radius: 0.3em;
    font-size: 0.75em;
    white-space: nowrap;
}

/* Tooltip Style */
label[title] {
    position: relative;
}

label[title]:hover::after {
    content: attr(title);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 0.5em;
    border-radius: 0.3em;
    font-size: 0.75em;
    white-space: nowrap;
    z-index: 1;
}

.placeholder-style {
    color: #a0aec0;
    /* Gray color similar to placeholders */
    font-size: 0.875rem;
    /* Smaller text size */
}

/* Adjusted Tooltip Style for Submit Button */
button[title] {
    position: relative;
}

button[title]:hover::after {
    content: attr(title);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 0.5em;
    border-radius: 0.3em;
    font-size: 0.75em;
    white-space: nowrap;
    margin-top: 0.5em;
    z-index: 10;
}

/* Ensure the tooltip does not overflow the viewport */
button[title]:hover::after {
    max-width: calc(100vw - 1rem);
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>