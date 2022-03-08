import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
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
    path: '/',
    name: 'login',
    component: () => import('../components/Login')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword')
  }
]

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('comics')
  else next()
})

export default router