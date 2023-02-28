import Vue from 'vue'
import VueRouter from 'vue-router'
import Doctor from '../views/Doctor.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import PageNotFound from '../views/PageNotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/doctor/:id',
    name: 'doctor',
    component: Doctor
  },
  {
    path: '/search',
    name: 'search',
    query: {},
    component: Search
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  // page title generator.
  if (to.name) {
    document.title = to.name.charAt(0).toUpperCase() + to.name.slice(1);
  }
  next();
});

export default router
