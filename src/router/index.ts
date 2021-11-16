import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Section1 from '@/views/Section1.vue'
import Section2 from '@/views/Section2.vue'
import Section3 from '@/views/Section3.vue'
import Section4 from '@/views/Section4.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/section1',
    name: 'section1',
    component: Section1,
  },
  {
    path: '/section2',
    name: 'section2',
    component: Section2,
  },
  {
    path: '/section3',
    name: 'section3',
    component: Section3,
  },
  {
    path: '/section4',
    name: 'section4',
    component: Section4,
  },
]

const router = new VueRouter({
  routes
})

export default router
