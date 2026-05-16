import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false


// 创建 Vue 实例
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
