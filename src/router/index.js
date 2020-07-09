import Vue from 'vue'
import VueRouter from 'vue-router'

import Worldwide from '../components/right-body/Worldwide.vue'
import Nationwide from '../components/right-body/Nationwide.vue'
import Statewise from '../components/right-body/Statewise.vue'
import Districts from '../components/right-body/District.vue'
import Symptoms from '../components/right-body/Symptoms.vue'
import AboutUs from '../components/right-body/AboutUs.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Worldwide',
    component: Worldwide,
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
    path: '/distwise',
    name: 'Districs',
    component: Districts,
    props: true,
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
