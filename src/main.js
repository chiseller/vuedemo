import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/normalize.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 主分支提交的内容