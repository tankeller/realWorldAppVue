import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Profile from './views/User/Profile.vue'
import Settings from './views/User/Settings.vue'
import Register from './views/User/Register.vue'
import Login from './views/User/Login.vue'
import Article from './views/Article/Article.vue'
import CreateEdit from './views/Article/CreateEdit.vue'


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
      path: '/user/:username',
      name: 'profile',
      component: Profile,
      children: [
        {
          path: 'settings',
          component: Settings
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/article/:slug',
      name: 'article',
      component: Article,
      children: [
        {
          path: 'edit',
          component: CreateEdit
        }
      ]
    }
  ]
})
