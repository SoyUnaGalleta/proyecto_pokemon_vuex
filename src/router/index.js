import { createRouter, createWebHistory } from 'vue-router'
import HomePokemon from '../views/HomePokemon.vue'
import ConsultaView from '../views/ConsultaView.vue'
import NotFound from '../components/NotFoundComponent.vue'


const routes = [
  {
    path: '/',
    name: 'HomePokemon',
    component: HomePokemon
  },
  {
    path: '/consulta',
    name: 'ConsultaView',
    component: ConsultaView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: "/:catchAll(.*)",
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
