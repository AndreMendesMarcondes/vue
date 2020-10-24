import Vue from 'vue'
//import App from './App.vue'
import Vueresource from 'vue-resource'
Vue.use(Vueresource)

import Home from './paginas/Home.vue'
const Contato = { template: '<p>Página de Contato</p>' }
const SemPagina = { template: '<p>Sem página</p>' }

const rotas = {
  '/': Home,
  '/home': Home,
  '/contato': Contato
}

new Vue({
  el: '#app',
  data: {
    rotaAtual: window.location.pathname
  },
  computed: {
    exibeComponente() {
      return rotas[this.rotaAtual] || SemPagina;
    }
  },
  render(h) { return h(this.exibeComponente) }
})
