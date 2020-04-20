import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Home from '../views/Home'
import Login from '../views/Login'
import My from '../views/My'
import Register from '../views/Register'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/hello',
    component: Hello,
    children: [
      {
        path: 'favorite',
        component: Favorite
      },
      {
        path: 'history',
        component: History
      }
    ]
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/search-result',
    component: SearchResult
  },
  {
    path: '/vip',
    component: Vip
  }

]

const router = new VueRouter({
  routes
})

export default router
