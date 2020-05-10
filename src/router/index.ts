import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
const Money = () => import(/*webpackChunkName: "Money" */ '../views/money/Money.vue')
import Labels from '../views/Labels.vue'
import Statistics from '../views/Statistics.vue'
import NotFound from '../views/404.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'Home',
    component: Money
  },
  {
    path: '/labels',
    name: 'Labels',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Labels
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
