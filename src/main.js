import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "/";

Vue.prototype.$ajax = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
