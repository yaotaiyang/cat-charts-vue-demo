import Vue from "vue";
import App from "./App.vue";

Vue.use(CatChartsVue);
new Vue({
  el: "#app",
  render: (h) => h(App)
});
