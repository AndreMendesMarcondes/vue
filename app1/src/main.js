import Vue from 'vue'
//import App from './App.vue'
import Vueresource from 'vue-resource'
Vue.use(Vueresource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './paginas/Home.vue'
const Contato = { template: '<p>Página de Contato</p>' }
const SemPagina = { template: '<p>Sem página</p>' }

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/contato', component: Contato }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')

//new Vue({
//  el: '#app',
//  data: {
//    rotaAtual: window.location.pathname
//  },
//  computed: {
//    exibeComponente() {
//      return rotas[this.rotaAtual] || SemPagina;
//    }
//  },
//  render(h) { return h(this.exibeComponente) }
//})
