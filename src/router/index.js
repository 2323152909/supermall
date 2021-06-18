import Vue from 'vue'
// import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    name:'home',
    path:'/home',
    component:Home,
    meta: {
      keepAlive: true //设置页面是否需要使用缓存
    },
  },
  {
    name:'category',
    path:'/category',
    component:Category,
    meta: {
      keepAlive: true //设置页面是否需要使用缓存
    },
  },
  {
    name:'cart',
    path:'/cart',
    component:Cart,
    meta: {
      keepAlive: true //设置页面是否需要使用缓存
    },
  },
  {
    name:'profile',
    path:'/profile',
    component:Profile,
    meta: {
      keepAlive: true //设置页面是否需要使用缓存
    },
  },
  {
    // name:'detail',
    path:'/detail/:id',
    component:Detail,
  }
]

const router = createRouter({
  routes,
  history:createWebHistory(),
})

export default router