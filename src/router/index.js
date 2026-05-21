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
  ],

  scrollBehavior(to, from, savedPosition) {
      //  只要是正常点击链接跳转，通通无脑强制滚回最顶部！
      // 注意：Vue2 必须写成 { x: 0, y: 0 }，写 top 和 left 浏览器不认哦！
      return { x: 0, y: 0 }
  }
})

export default router
