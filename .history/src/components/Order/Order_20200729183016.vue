<template>
 <div>
      <div class="box"><van-icon class="max" @click="click"  name="arrow-left" /></div>
     <div class="box1">我的订单</div>

     <div>
         <van-tabs v-model="active">
            <van-tab title="全部"></van-tab>
            <van-tab title="待支付"></van-tab>
            <van-tab title="待发货"></van-tab>
            <van-tab title="待收获"></van-tab>
            <van-tab title="已完成">


            </van-tab>
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
         active:'',
         msg:'',
         arr:[]
     }
   },
   methods: {
       click(){
           this.$router.back()
       },
       getData1(){
           this.$api.OrderseeData().then(res=>{
             this.msg=res.list
             this.msg.map(item=>{
                 this.arr.push(item.order_list)
                  console.log(item)
             })
             console.log(this.msg)
             console.log(this.arr)
           }).catch();
       },
   },
   mounted() {
       this.getData1()
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