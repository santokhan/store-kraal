
<script lang="ts" setup>
// @ts-nocheck+
// import * as marked from 'marked';
import markdownIt from 'markdown-it';
// import DOMPurify from 'dompurify';
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import BackButton from '../../components/button/BackButton.vue';
import VoiceInput from '../../components/kai/sidebar/right/modals/buddy/voice-input/VoiceInput.vue';

const ws = ref<any>(null);
const mediaRecorder = ref<any>(null)
const audioChunks = ref<any[]>([])
const transcription = ref<string>('')
const errorMessage = ref<string>('')
const awaitingFollowUp = ref<boolean>(false)
const isRecording = ref<boolean>(false)
const editMode = ref<string>('') // To track which section is being edited
const editableDescription = ref<string>('') // To hold the editable content for description
const editableInstructions = ref<string>('') // To hold the editable content for description
const editableName = ref<string>('') // To hold the editable content for description
const loading = ref<boolean>(false)
const editableResponse = ref<string>('') // Holds the editable response
const isResponseReceived = ref<boolean>(false) // Tracks if a response has been received
const featureInfo = reactive<{ name: string; description: string; instructions: string }>({ name: '', description: '', instructions: '' });

onMounted(connectWebSocket)

function connectWebSocket() {
    // WebSocket URL based on the environment
    // const wsUrl = process.env.NODE_ENV === 'production'
    //     ? 'wss://kraaltalk-5bfb8353b69a.herokuapp.com'
    //     : 'ws://localhost:8080';
    const wsUrl = "wss://kraaltalk-5bfb8353b69a.herokuapp.com";
    ws.value = new WebSocket(wsUrl);
    ws.value.onopen = () => console.log("WebSocket connection established");
    ws.value.onmessage = (event: any) => {
        try {
            loading.value = false;
            const data = JSON.parse(event.data);
            console.log("Complete WebSocket data received:", data);
            if (data.status === 'completed') {
                handleResponseReceived(data.details);
                console.log("Feature info updated:", featureInfo);
            } else if (data.status === 'incomplete') {
                transcription.value = data.question;
                awaitingFollowUp.value = true;
            } else if (data.error) {
                errorMessage.value = `${data.error} Try recording again.`;
                awaitingFollowUp.value = false;
            }
        } catch (error) {
            errorMessage.value = "Error parsing message from server: " + error;
            console.error("WebSocket message parsing error:", error);
        }
    };
    ws.value.onerror = (error: any) => {
        errorMessage.value = "WebSocket connection error: " + (error.message ||
            "Unknown Error");
        console.error("WebSocket error:", error);
    };
    ws.value.onclose = (event: any) => {
        if (!event.wasClean) {
            errorMessage.value = `WebSocket connection closed unexpectedly: ${event.reason}`;
        } else {
            errorMessage.value = "WebSocket connection closed";
        }
    };
}
async function startRecording() {
    if (isRecording.value) {
        console.log("Already recording, not starting a new recording");
        return;
    }
    errorMessage.value = '';
    isRecording.value = true;
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.value = new MediaRecorder(stream);
        audioChunks.value = [];
        mediaRecorder.value.ondataavailable = (e: any) => {
            if (e.data && e.data.size > 0) {
                audioChunks.value.push(e.data);
            }
        };
        mediaRecorder.value.onstop = () => {
            processRecording();
        };
        mediaRecorder.value.start(1000);
    } catch (error: any) {
        errorMessage.value = "Error starting recording: " + (error.message || "Unknown Error");
        isRecording.value = false;
    }
}
function stopRecording() {
    if (mediaRecorder.value && mediaRecorder.value.state === 'recording') {
        mediaRecorder.value.stop();
    }
    isRecording.value = false;
}
function processRecording() {
    loading.value = true;
    const audioBlob = new Blob(audioChunks.value, { type: 'audio/wav' });
    if (!audioBlob.size) {
        errorMessage.value = "No data recorded. Please try again.";
        loading.value = false;
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        ws.value.send(reader.result);
    };
    reader.onerror = () => {
        errorMessage.value = "Error processing the recording.";
        loading.value = false;
    };
    reader.readAsDataURL(audioBlob);
    audioChunks.value = [];
}
function parseMarkdown(markdown: string) {
    if (!markdown) return '';
    // const rawHtml = marked(markdown);
    // return DOMPurify.sanitize(rawHtml);

    const md = new markdownIt();
    const rawHtml = md.render(markdown);
    return rawHtml;
}
function enterEditMode(section: string) {
    editMode.value = section;
    switch (section) {
        case 'name':
            editableName.value = featureInfo.name;
            break;
        case 'description':
            editableDescription.value = featureInfo.description;
            break;
        case 'instructions':
            editableInstructions.value = featureInfo.instructions;
            break;
        // Add more cases as needed
    }
}
function saveEdits() {
    switch (editMode.value) {
        case 'name':
            featureInfo.name = editableName.value;
            break;
        case 'description':
            featureInfo.description = editableDescription.value;
            break;
        case 'instructions':
            featureInfo.instructions = editableInstructions.value;
            break;
        // Add more cases as needed
    }
    editMode.value = ''; // Exit edit mode
}
function updateFeatureInfo(data: any) {
    if (data.name) featureInfo.name = data.name;
    if (data.description) featureInfo.description =
        parseMarkdown(data.description);
    if (data.instructions) featureInfo.instructions =
        parseMarkdown(data.instructions);
}
function handleResponseReceived(responseData: any) {
    console.log("Received Response Data:", responseData);
    featureInfo.name = responseData.name;
    featureInfo.description = responseData.description;
    featureInfo.instructions = responseData.instructions;
    editableResponse.value = `Name: ${responseData.name}\n\nDescription: ${responseData.description}\n\nInstructions: ${responseData.instructions}`;
    isResponseReceived.value = true;
    console.log("Updated featureInfo:", featureInfo);
}
function submitFeatureRequest() {
    const payload = {
        response: editableResponse.value,
        // any other relevant data
    };
    // Replace 'your-backend-endpoint' with your actual backend endpoint
    axios.post('your-backend-endpoint', payload)
        .then(response => {
            console.log('Response submitted successfully', response);
            // Handle success
        })
        .catch(error => {
            console.error('Error submitting response', error);
            // Handle error
        });
}

function parsedDescription() {
    return featureInfo.description ?
        // DOMPurify.sanitize(marked(featureInfo.description))
        new markdownIt().render(featureInfo.description)
        :
        '';
}
function parsedInstructions() {
    return featureInfo.instructions ?
        // DOMPurify.sanitize(marked(featureInfo.instructions))
        new markdownIt().render(featureInfo.instructions)
        :
        '';
}
</script>

<template>
    <div class="bg-[#343541] flex flex-col h-screen w-full text-white">
        <div class="flex justify-between items-center border-b border-gray-500 px-4 py-2">
            <BackButton />
            <!-- <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-blue-400">Create</button> -->
            <button type="button" :disabled="!isResponseReceived" @click="submitFeatureRequest"
                class="text-white bg-kraal-purple-500 hover:bg-kraal-purple-500/80 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">Create</button>
        </div>
        <div class="flex-grow flex flex-wrap overflow-auto relative">
            <div :class="['w-full lg:w-1/2 lg:border-r border-gray-500 p-4 grid', 'bg-[#343541] sticky left-0 top-0']">
                <div class="flex flex-col items-center justify-center space-y-4">
                    <VoiceInput :transcription="editableResponse" />
                    <button :class="{ 'bg-red-600': isRecording, 'bg-gray-600': !isRecording }" @mousedown="startRecording"
                        @mouseup="stopRecording" class="text-white font-semibold py-2 px-4 rounded focus:outline-none">
                        {{
                            isRecording ?
                            'Release to Stop'
                            :
                            (awaitingFollowUp ? 'Respond to Question' : 'Push & Hold to Talk')
                        }}
                    </button>
                    <div v-if="isRecording" class="mt-2 text-white">
                        Recording... <span class="animate-ping absolute h-3 w-3 rounded-full bg-white opacity-75"></span>
                    </div>
                </div>
                <div class=""></div>
            </div>
            <div class="w-full lg:w-1/2 h-full overflow-auto+ flex flex-col items-center">
                <div class="markdown-body px-4 md:px-8 md:py-4 text-white max-w-2xl">
                    <!-- Name Section -->
                    <div v-if="isResponseReceived" class="mb-6">
                        <h2 class="text-2xl font-semibold mb-2 text-white">Name</h2>
                        <p>{{ featureInfo.name }}</p>
                    </div>
                    <!-- Description Section -->
                    <div v-if="isResponseReceived" class="mb-6">
                        <h2 class="text-2xl font-semibold mb-2 text-white">Description</h2>
                        <div class="prose prose-invert" v-html="parsedDescription()"></div>
                    </div>
                    <!-- Instructions Section -->
                    <div v-if="isResponseReceived" class="mb-6">
                        <h2 class="text-2xl font-semibold mb-2 text-white">Instructions</h2>
                        <div class="prose prose-invert" v-html="parsedInstructions()"></div>
                    </div>
                    <!-- Error Message Display -->
                    <div v-if="errorMessage" class="bg-red-200 p-4 rounded text-red-800">
                        <p><strong>Error:</strong> {{ errorMessage }}</p>
                    </div>
                    <!-- Loading Spinner -->
                    <div v-if="loading" class="relative grid place-items-center gap-1">
                        <div class="loading-spinner"></div>
                        <div class="">Processing...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/*
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #1e1e1e;
    color: white;
    box-sizing: border-box;
} 
*/
.left-section,
.right-section {
    flex: 1;
    /* Flex-grow to fill the space */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    /* Padding for spacing */
    box-sizing: border-box;
    /* Adjusts box model to include padding and border */
}

.left-section {
    border-right: 2px solid gray;
    /* Vertical dividing line */
}

.right-section {
    padding-left: 1rem;
}

button.active {
    background-color: #f44336;
    /* Red background for active recording */
}

/* Style for the recording indicator */
.recording-indicator {
    padding: 10px;
    background-color: #ff4d4d;
    /* Red background */
    color: white;
    text-align: center;
    border-radius: 5px;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.7;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Style for dot flashing animation */
.dot-flashing {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    margin: 0 5px;
    animation: dotFlashing 1s infinite linear alternate;
}

@keyframes dotFlashing {
    0% {
        background-color: #e0e0e0;
    }

    50%,
    100% {
        background-color: white;
    }
}

/* Style for loading spinner */
.loading-spinner {
    /* margin: 20px auto; */
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    /* border-top: 5px solid #3498db; */
    border-top: 5px solid #8d41fe;
    border-radius: 50%;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.feature-info,
.error-message {
    background-color: #333;
    /* Slightly lighter background for visibility */
    padding: 20px;
    border-radius: 5px;
    margin: 10px;
}

@media (max-width: 768px) {
    /* Responsive styles for smaller screens */
}
</style>