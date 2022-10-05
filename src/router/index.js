import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import Randevu from '../views/Randevu.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/randevu',
    name: 'Randevu',
    component: Randevu
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
