import Vue from 'vue'
import VueRouter from 'vue-router'
import Doctor from '../views/Doctor.vue'
import Randevu from '../views/Randevu.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/doctor/:id',
    name: 'doctor',
    component: Doctor
  },
  {
    path: '/search/:id',
    name: 'search',
    component: Search
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
