import Vue from 'vue'
// import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Li = () => import('views/li/Li.vue')
const Shop = () => import('views/shop/Shop.vue')
const Profile = () => import('views/profile/Profile.vue')


const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    name:'li',
    path:'/li',
    component:Li
  },
  {
    name:'shop',
    path:'/shop',
    component:Shop
  },
  {
    name:'profile',
    path:'/profile',
    component:Profile
  },
]

const router = createRouter({
  routes,
  history:createWebHistory()
})

export default router