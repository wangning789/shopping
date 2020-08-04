<template>
 <div>
   
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">商城</van-tabbar-item>
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
         active:0,
         badge:''
     }
   },
   methods: {
     clickclassification(){
       this.$router.push("/classification")
     },

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