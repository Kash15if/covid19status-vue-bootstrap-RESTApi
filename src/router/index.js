import Vue from 'vue'
import VueRouter from 'vue-router'

import Worldwide from '../components/Worldwide.vue'
import Nationwide from '../components/Nationwide.vue'
import Statewise from '../components/Statewise.vue'
import Districts from '../components/District.vue'
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
    path: '/nationwide',
    name: 'Nationwide',
    component: Nationwide
  },
  {
    path: '/statewise',
    name: 'Statewise',
    component: Statewise
  },
  {
    path: '/District',
    name: 'Districs',
    component: Districts
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/symptoms',
    name: 'Symptoms',
    component: Symptoms
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
