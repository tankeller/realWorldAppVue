import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Profile from './views/User/Profile.vue'
import Settings from './views/User/Settings.vue'
import Register from './views/User/Register.vue'
import Login from './views/User/Login.vue'
import Article from './views/Article/Article.vue'
import CreateEdit from './views/Article/CreateEdit.vue'
import store from './store.js'

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
          component: Settings,
          beforeEnter (to, from, next) {
            if (store.token != null) {
              next()
            } else {
              next('/login')
            }
          }
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
      component: Article
    },
    {
      path: '/create',
      name: 'create',
      component: CreateEdit,
      children: [
        {
          path: ':slug',
          name: 'edit',
          component: CreateEdit
        }
      ]
    }
  ]
})
