import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage'
import SolicitacoesAgend from '../views/SolicitacoesAgend'
import MainPage from '../views/HomePage'
import SolicitacaoAgend from '../views/SolicitacaoAgend'
import AgendaSolicitacoes from '../views/AgendaSolicitacoes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/solicitacoes',
    name: 'SolicitacoesAgend',
    component: SolicitacoesAgend
  },
  {
    path: '/solicitar',
    name: 'SolicitacaoAgend',
    component: SolicitacaoAgend
  },
  {
    path: '/agenda',
    name: 'AgendaSolicitacoes',
    component: AgendaSolicitacoes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, _, next) => {
  const isAuthenticated = localStorage.getItem('token');

  if (!isAuthenticated && to.name !== 'login') {
    return next({ name: 'login' })
  }

  if (isAuthenticated && to.name === 'login') {
    return next({ name: 'MainPage'})
  }

  next();
})

export default router
