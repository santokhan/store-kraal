<template>
    <div v-if="props.robot" :class="['markdown-body overflow-auto pt-1']">
        <div class="prose prose-invert" v-html="markdownParser(props.robot)"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import markdownParser from '../markdownParser'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
// import './atom-one-dark.css'

const props = defineProps<{ robot?: string }>()

onMounted(hljs.highlightAll);
onUpdated(hljs.highlightAll);
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

.btn {
    display: inline-block;
    padding: 10px 20px;
    margin-bottom: 20px;
    background-color: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
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
</style>
