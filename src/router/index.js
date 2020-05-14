import Vue from 'vue'

import VueRoute from 'vue-router'

const Home = () => import('views/home/Home')
const Categroy = () => import('views/categroy/Categroy')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const DetailView = () => import('views/detail/DetailView')

Vue.use(VueRoute)

const routes = [
  {
    path: '/', 
    redirect: '/home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home', 
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/categroy', 
    component: Categroy,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart', 
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile', 
    component: Profile,
    meta: {
      title: '个人档案'
    }
  },
  {
    path: '/detail/:id', 
    name: 'Deatail', 
    component: DetailView,
    meta: {
      title:'商品详情'
    }
  }
]

const rou = new VueRoute({
  routes,
  mode: 'history'
})

export default rou 


rou.beforeEach((to, from, next) => {
  if(to.meta.title != undefined) {
    console.log(from)
    document.title = to.meta.title
    next()
  }else {
    next()
  }
})