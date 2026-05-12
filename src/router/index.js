import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'hash',
  routes:[
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'BlogList', component: BlogList },
    { path: '/blog/:id', name: 'BlogPost', component: BlogPost, props: true },
    { path: '/about', name: 'About', component: About }
  ]
})

export default router
