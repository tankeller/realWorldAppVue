import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Profile from './views/User/Profile.vue'
import Settings from './views/User/Settings.vue'
import Register from './views/User/Register.vue'
import Login from './views/User/Login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'profile',
      component: Profile,
      children: [
        {
          path: 'settings',
          component: Settings
        },
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    }
  ]
})
