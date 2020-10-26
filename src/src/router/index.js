import Vue from 'vue'
import VueRouter from 'vue-router'
import Indicadores from '../views/Indicadores.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'indicadores',
    component: Indicadores
  }
]

const router = new VueRouter({
  routes
})

export default router
