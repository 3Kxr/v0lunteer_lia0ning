// import './assets/main.css'/*  */

import "element-plus/dist/index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
/* 导入相关组件 */
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";

import store from "./stores/stores";

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);

app.use(store)

app.mount("#app");
// app.mount("#app");
