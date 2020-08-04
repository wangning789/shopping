import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Homebotton from'../components/bottom/Homebotton'

Vue.use(VueRouter)

  const routes = [
    
  
  {
    path:"",
    component:Homebotton,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path:"/classification",
        name:"classification",
        component:()=>import("../components/classification/classification")
      },
      {
        path:"/Shoppingcat",
        name:"Shoppingcat",
        component:()=>import("../components/Shoppingcart/shoppingcart")
      },
      {
        path:"/Me",
        name:"Me",
        component:()=>import("../components/Me/Me")
      },
    ]
  },
  {
    path:"/Login",
    name:"Login",
    component:()=>import("../components/Login.vue")
  },
  {
    path:"/Address",
    name:"Address",
    component:()=>import("../components/Login.vue")
  },
  
  
  {
    // 详情页面
    path:"/Details",
    name:"Details",
    component:()=>import("../components/Details/Details.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
