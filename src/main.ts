import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index";
// firebase
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp, firebaseInit } from "./auth/firebaseApp";
// CSS
import "./main.css";
import "./assets/css/markdown-github.css";
// highlightjs https://github.com/highlightjs/vue-plugin
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage('javascript', javascript);
// VueDatePicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { loadConfig } from "./config";

async function init() {
    await loadConfig();
    await firebaseInit();

    // mount app
    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.use(VueFire, { firebaseApp, modules: [VueFireAuth()] });
    app.use(hljsVuePlugin);
    app.component('VueDatePicker', VueDatePicker);
    app.mount("#app");
}

init()