import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import App from "./App.vue";
import router from "./routers/index";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
