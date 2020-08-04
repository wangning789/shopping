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
        // 分类
        path:"/classification",
        name:"classification",
        component:()=>import("../components/classification/classification")
      },
      {
        // 购物车
        path:"/Shoppingcat",
        name:"Shoppingcat",
        component:()=>import("../components/Shoppingcart/shoppingcart")
      },
      {
        // 我的
        path:"/Me",
        name:"Me",
        component:()=>import("../components/Me/Me")
      },
    ]
  },
  {
    // 登陆
    path:"/Login",
    name:"Login",
    component:()=>import("../components/Login.vue")
  },
  {
    // 从我的页面进入的地址管理
    path:"/Address",
    name:"Address",
    component:()=>import("../components/Address/Address")
  },
  {
    // 从购物车跳转的地址管理
    path:"/Address1",
    name:"Address1",
    component:()=>import("../components/Address/Address1")
  },
  
  
  {
    // 详情页面
    path:"/Details",
    name:"Details",
    component:()=>import("../components/Details/Details.vue")
  },
  {
    // 新增地址
    path:"/Newaddress",
    name:"Newaddress",
    component:()=>import("../components/Newaddress/Newaddress")
  },
  {
    // 修改地址
    path:"/Xiuaddress",
    name:"Xiuaddress",
    component:()=>import("../components/Newaddress/Xiuaddress.vue")
  },
  {
    // 我的收藏
    path:"/Collection",
    name:"Collection",
    component:()=>import("../components/Collection/Collection")
  },
  {
    // 结算页面
    path:"/Settlement",
    name:"Settlement",
    component:()=>import("../components/Settlement/Settlement.vue")
  },
  {
    //我的订单
    path:"/Order",
    name:"Order",
    component:()=>import("../components/Order/Order.vue")
  },
  {
    //我的评论
    path:"/Evaluate",
    name:"Evaluate",
    component:()=>import("../components/Evaluate/Evaluate")
  },
  {
    //评论
    path:"/Jet",
    name:"Jet",
    component:()=>import("../components/Jet/Jet.vue")
  },
  {
    //查看已经评论
    path:"/Complete",
    name:"Complete",
    component:()=>import("../components/Complete/Complete.vue")
  },
  {
    // 最近浏览
    path:"/Lately",
    name:"Lately",
    component:()=>import("../components/Lately/Lately.vue")
  },
  {
    // 个人信息
    path:"/Own",
    name:"Own",
    component:()=>import("../components/Own/Own.vue")
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


//核心
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



export default router
