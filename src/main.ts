import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index";
// firebase
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from "./auth/firebaseApp";
// CSS
import "./main.css";
// noom
import "./assets/css/bundle.a1ef1dfe.css";
import "./assets/css/dropdown.css";
import "./assets/css/fontawesome.all.min.css";
import "./assets/css/input-style.css";
import "./assets/css/locale.1cac42c3.chunk.css";
import "./assets/css/noom.css";
// font
import "./assets/css/font/cheyenne/cheyenne.css";
import "./assets/css/font/Untitled_Sans_Regular/Untitled_Sans_Regular.css";
// mount app
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueFire, { firebaseApp, modules: [VueFireAuth()] });
app.mount("#app");


