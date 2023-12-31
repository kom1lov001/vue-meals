import { createApp } from "vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
