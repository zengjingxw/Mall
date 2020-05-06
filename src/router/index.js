import Vue from 'vue'

import VueRoute from 'vue-router'

const Home = () => import('views/home/Home')
const Categroy = () => import('views/categroy/Categroy')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRoute)

const routes = [
  {
    path: '/', 
    redirect: '/home'
  },
  {
    path: '/home', 
    component: Home
  },
  {
    path: '/categroy', 
    component: Categroy
  },
  {
    path: '/cart', 
    component: Cart
  },
  {
    path: '/profile', 
    component: Profile
  }
]

export default new VueRoute({
  routes,
  mode: 'history'
})
