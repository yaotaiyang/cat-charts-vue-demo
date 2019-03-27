import Vue from 'vue'
import App from './App.vue'
import * as CatCharts from 'cat-charts'
Vue.use(CatCharts)

new Vue({
  el: '#app',
  render: h => h(App)
})
