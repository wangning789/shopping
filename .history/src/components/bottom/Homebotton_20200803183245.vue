<template>
 <div>
   <router-view></router-view>
<div v-if="Pretty===0">
  <van-tabbar route>
  <van-tabbar-item icon="home-o" replace to="/">商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" replace to='/classification'>分类</van-tabbar-item>
  <van-tabbar-item icon="cart-o" :badge="badge" replace to="/Shoppingcat">购物车</van-tabbar-item>
  <van-tabbar-item icon="manager-o"  replace to='/Me'>我的</van-tabbar-item>
</van-tabbar>
</div>
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
        
         badge:'',
         num:''
     }
   },
   methods: {
    
     
        // 购物车数据
        getDatacatda(){
        this.$api
           .ShoppingData().then(res=>{
               let arr=res.shopList.length
               this.badge=arr
              
            console.log(this.variable)
           }).catch()
    }

   },
   mounted() {
    //  购物车数据
     this. getDatacatda()
    this.num=this.variable
    console.log(this.num)
   
   },
   watch: {

   },
   computed: {
     Pretty(){
       return this.$store.state.Pretty
       
     },

     variable(){
       return this.$store.state.variable
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>