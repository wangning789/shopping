<template>
 <div>
     <!-- 没有商品的情况下 -->
       <div v-if="badge===0">
            <div class="box">购物车</div>
           <div class="box1"> <van-icon name="shopping-cart-o" class="tubiao" size="150px"/></div>
           <div class="box2">购物车还是空的</div>
           <van-button class="box3" round type="default" @click="clickgo">点击去购物</van-button>
       </div>
    <!-- 有商品的情况下 -->
    <div>
        <div class="box">购物车</div>
        <div class="max">
            <div><van-checkbox v-model="checked" checked-color="#D53F3A" shape="square">取消全选</van-checkbox></div>
            <div></div>
        </div>

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
         checked:''
     }
   },
   methods: {
       clickgo(){
           this.$router.push('/')
       },
        // 购物车数据
         getDatacatda(){
        this.$api
           .ShoppingData().then(res=>{
               let arr=res.shopList.length
               this.badge=arr
            // console.log(res)
           }).catch()
    }

   },
   mounted() {
       this.getDatacatda()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    height: 40px;
    width: 100%;
    border-bottom: 1px solid rgb(238,238,238);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}
.tubiao{
    color: rgb(213,63,58);
}
.box1{
    width: 200px;
    height: 200px;
    background-color: rgb(238,238,238);
    border-radius: 50%;
    position:absolute;
    left: 85px;
    top:100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box2{
    position:absolute;
    left: 100px;
    top:320px;
    margin: 20px 0px;
    font-size: 25px;
    color: rgb(92, 92, 92);
  
}
.box3{
    width: 150px;
     position:absolute;
    left: 110px;
    top:420px;
}
.max{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgb(238,238,238);
    display: flex;
    align-items: center;
}
</style>