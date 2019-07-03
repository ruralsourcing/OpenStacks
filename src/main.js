import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import "./plugins/vuetify";
import "./stylus/main.styl";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    primary: "#009688",
    secondary: "#9c27b0",
    accent: "#673ab7",
    error: "#f44336",
    warning: "#ff9800",
    info: "#03a9f4",
    success: "#4caf50"
  }
});
Vue.use(VueRouter);

new Vue({
  render: h => h(App)
}).$mount("#app");
