<template>
 <div>
      <div class="box"><van-icon class="max" name="arrow-left" /></div>
     <div class="box1">我的订单</div>

     <div>
         <van-tabs v-model="active">
            <van-tab title="标签 1">全部</van-tab>
            <van-tab title="标签 2">待支付</van-tab>
            <van-tab title="标签 3">待发货</van-tab>
            <van-tab title="标签 4">待收获</van-tab>
            <van-tab title="标签 4">以完成</van-tab>
        </van-tabs>
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

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box1{
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    border-bottom:1px solid rgb(238,238,238);
}
.box{
    position: absolute;
    left: 10px;
    top: 15px;
}
</style>