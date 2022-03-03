import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/UserCreate')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/UserList')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/UserEdit')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Register')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/Dashboard')
  },
  {
    path: '/meeting',
    name: 'meeting',
    component: () => import('../components/Meeting')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/Signup')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router