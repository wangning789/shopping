<template>
 <div>
   <router-view></router-view>
<van-tabbar >
  <van-tabbar-item icon="home-o" replace to="/">商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" replace to='/classification'>分类</van-tabbar-item>
  <van-tabbar-item icon="cart-o" :badge="badge">购物车</van-tabbar-item>
  <van-tabbar-item icon="manager-o" badge="20">我的</van-tabbar-item>
</van-tabbar>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        
         badge:''
     }
   },
   methods: {
    
     
        // 购物车数据
        getDatacatda(){
        this.$api
           .ShoppingData().then(res=>{
               let arr=res.shopList.length
               this.badge=arr
            console.log(res)
           }).catch()
    }

   },
   mounted() {
    //  购物车数据
     this. getDatacatda()
   
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>