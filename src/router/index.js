import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'


import About from '../views/About.vue'
import BlogPost from '../views/BlogPost.vue'



Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'hash',
  routes:[
    {
      path: '/', 
       component: Home 
      },
    
    { 
      path: '/blog',
      component: BlogList 
      },
    { 
      path: '/about', 
      component: About 
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost
    }
    
  ]
})

export default router
