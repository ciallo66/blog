import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局样式
import './assets/styles/global.css'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router,
})
