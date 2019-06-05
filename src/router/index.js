import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Mine from '@/components/Page/Mine.vue'
import Class from '@/components/Page/Class.vue'
import Trends from '@/components/Page/Trends.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    },
    {
      path:'/class',
      name:'class',
      component:Class
    },
    {
      path:'/trends',
      name:'class',
      component:Trends
    }
  ]
})
