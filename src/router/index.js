import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'

import About from '../views/About.vue'

import Vue2 from '../content/Vue2.vue'


Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'hash',
  routes:[
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'BlogList', component: BlogList },

    { path: '/about', name: 'About', component: About },
    { path: '/blog/1',component:Vue2}
  ]
})

export default router
