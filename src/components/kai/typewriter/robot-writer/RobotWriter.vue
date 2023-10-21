<template>
    <KraalAI class="w-6 min-w-[1.5rem] text-gray-400" />
    <div v-if="robotText.length <= 0" class="w-2 h-5 my-1.5 bg-white/50 on-off"></div>
    <div v-html="markdownParser(robotText.join(' '))" class="text-gray-200 space-y-4 overflow-auto tracking-wide"></div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import markdownParser from '../markdownParser'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// import './atom-one-dark.css'
import KraalAI from '../../../icons/kraalai.vue'

const props = defineProps<{ robot: string, eleScrollTop: () => void }>()
const robotText = reactive<string[]>([])

function typeWriter(robot: string) {
    const textArray: string[] = robot.split(" ");
    const typingDelay = 25; // in milliseconds
    let index = 0;

    const interval = setInterval(() => {
        if (textArray.length > robotText.length) {
            robotText.push(textArray[index])
            index++
            props.eleScrollTop();
        } else {
            clearInterval(interval)
            // You can call `hljs.highlightAll()` 2 times on typewriter end
            hljs.highlightAll()
        }
    }, typingDelay)
}

watchEffect(() => {
    if (props.robot) {
        typeWriter(props.robot)
    }
})
</script>

<style scoped>
.typewriter-text {
    display: inline;
    word-wrap: break-word;
    border-right: 0.15em solid orange;
    white-space: pre-wrap;
    overflow: hidden;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

.loading-block {
    width: 50px;
    height: 50px;
    background: radial-gradient(circle, #007BFF, #5500ff, #007BFF);
    border-radius: 50%;
    animation: blink 3s infinite;
}

.loading-block.loading-fast {
    animation: blink 0.95s infinite;
}

@keyframes blink {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(0.95);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.question-input {
    position: sticky;
    bottom: 0;
    background: #f9f9f9;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.question-input input {
    flex: 1;
    margin-right: 10px;
}

.question-input button {
    padding: 5px 10px;
    background-color: #007BFF;
    color: white;
    border-radius: 4px;
}

.typewriter-text {
    border-right: 0.15em solid orange;
    white-space: pre;
    overflow: hidden;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: orange;
    }
}

.error-message {
    color: red;
    font-weight: bold;
    margin-top: 10px;
}

.on-off {
    animation: onOff 1s ease-in-out infinite;
}

@keyframes onOff {
    0% {
        visibility: hidden;
    }

    50% {
        visibility: hidden;
    }

    51% {
        visibility: visible;
    }

    100% {
        visibility: visible;
    }
}
</style>
