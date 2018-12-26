import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/',
      name: 'Default',
      redirect:'/about'
    }
  ]
})
