<template>
 <div>
   <router-view></router-view>
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" @click="clickhome">商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" dot @click="clickclassification">分类</van-tabbar-item>
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
         active:"",
         badge:''
     }
   },
   methods: {
     clickclassification(){
       this.$router.push("/classification").catch(error => error)
     },
     clickhome(){
       this.$router.push("/").catch(error => error)
     },

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
    if(this.$router.push('/').catch(error => error)){
      this.active=0
    }

     if(this.$router.push('/classification').catch(error => error)){
       this.active=1
     }
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>