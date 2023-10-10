import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

// Create a reactive object
const GStore = reactive({ flashMessage: "" });
app.provide("GStore", GStore); // provide this object so others can inject it

app.mount("#app");
