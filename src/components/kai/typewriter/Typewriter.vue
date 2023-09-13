<template>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-10 pb-5 md:pt-22 md:pb-30">
            <div class="prose prose-lg m-6">
                <router-link to="/grid" class="btn">Go to Tables</router-link>
                <button @click="clearChat" class="btn clear-chat-btn">New Chat</button>
                <div class="loading-block" v-show="isLoading" :class="{ 'loading-fast': isLoading }"></div>
                <div v-for="item in history" :key="item.question">
                    <p><strong>Q:</strong> {{ item.question }}</p>
                    <div v-html="item.response"></div>
                </div>
                <div class="error-message" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
                <div class="question-input">
                    <input v-model="question" placeholder="Enter your question here" :disabled="isTyping" />
                    <button @click="fetchResponse" :disabled="isTyping">Submit Question</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// @ts-nocheck
import axios from 'axios';
// import marked from 'markdown-it';
// import marked from 'marked';
// import Prism from 'prismjs';
// import 'prismjs/components/prism-autoit';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-python';
import { mapMutations } from 'vuex';

export default {
    name: 'TypeWriter',
    data() {
        return {
            isLoading: false,
            question: '',
            isTyping: false,
            errorMessage: '',
            history: [],
        };
    },
    methods: {
        ...mapMutations(['SET_MARKDOWN_DATA', 'SET_TABLES']),
        clearChat() {
            this.history = [];
        },
        async fetchResponse() {
            if (!this.question.trim()) {
                alert('Please enter a question.');
                this.isLoading = false;
                return;
            }
            this.isLoading = true;
            this.isTyping = true;
            try {
                const res = await axios.post('https://kraalai.herokuapp.com/analyze', { question: this.question });
                if (res.data && res.data.data && res.data.data.markdownData) {
                    this.SET_MARKDOWN_DATA(res.data.data.markdownData);
                    this.history.push({ question: this.question, response: '' });
                }
                if (res.data && res.data.data && Array.isArray(res.data.data.tables)) {
                    const formattedTables = res.data.data.tables.map((table) => ({
                        ...table,
                        rows: this.convertRowsToObjects(table.headers, table.rows),
                    }));
                    this.SET_TABLES(formattedTables);
                }
                this.errorMessage = '';
            } catch (error) {
                this.errorMessage = 'An error occurred while fetching the data.';
            } finally {
                this.question = '';
                this.isLoading = false;
            }
        },
        animateMarkdown(markdown) {
            if (markdown) {
                const words = markdown.split(' ');
                let i = 0;
                const intervalId = setInterval(() => {
                    if (i < words.length) {
                        this.history[this.history.length - 1].response += words[i] + ' ';
                        i++;
                    } else {
                        this.isTyping = false;
                        clearInterval(intervalId);
                    }
                }, 40);
            }
        },
        convertRowsToObjects(headers, rows) {
            return rows.map((row) => {
                let rowObject = {};
                row.forEach((value, index) => {
                    rowObject[headers[index]] = value;
                });
                return rowObject;
            });
        },
        parseMarkdown(markdown) {
            if (markdown) {
                marked.setOptions({
                    highlight: function (code, language) {
                        language = language ? language : 'autoit';
                        const prismLanguage = Prism.languages[language] || Prism.languages.autoit;
                        return Prism.highlight(code, prismLanguage);
                    }
                });
                const html = marked(markdown);
                return html;
            }
            return "";
        },
    },
    watch: {
        '$store.state.markdownData'(newValue) {
            const parsedMarkdown = this.parseMarkdown(newValue);
            this.animateMarkdown(parsedMarkdown);
        },
    }
}
</script>

<script setup lang="ts"></script>


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

.error-message {
    color: red;
    font-weight: bold;
    margin-top: 10px;
}
</style>
