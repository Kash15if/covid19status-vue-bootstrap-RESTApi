import Vue from 'vue'
import VueRouter from 'vue-router'

import Worldwide from '../components/Worldwide.vue'
import Nationwide from '../components/Nationwide.vue'
import Statewise from '../components/Statewise.vue'
import District from '../components/District.vue'
import Symptoms from '../components/Symptoms.vue'
import AboutUs from '../components/AboutUs.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Worldwide',
    component: Worldwide
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/statewise',
    name: 'Statewise',
    component: Statewise
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
