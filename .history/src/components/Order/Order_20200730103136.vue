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
                <div class="wai">
                    <div v-for="(item,index) in msg" :key="index">
                       <div class="zuida">
                        <div class="min">
                            <div>订单编号：{{item.order_id}}</div>
                            <div>交易完成</div>
                        </div>
                        <div v-for="(item1,index1) in item.order_list" :key="index1">
                            <div class="omg">
                                <div class="ig"><img :src="item1.image_path" class="ig1"></div>
                                <div class="edg">{{item1.name}}</div>
                                <div class="rng">
                                    <div>¥{{item1.present_price}}</div>
                                    <div class="rng2">x{{item1.count}}</div>
                                </div>
                            </div>
                        </div>
                         <div class="nba">
                                <div>创建时间：{{item.add_time}}</div>
                                <div>收获地址:{{item.address}}</div>
                                <div>共{{item.order_list.length}}种商品&nbsp; 合计{{item.mallPrice | sun}}元</div>
                        </div>
                   </div>
                </div>
                </div>

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
         msg:[],
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
             this.num()
             console.log(this.msg)
           
           }).catch();
       },
       num(){
           this.msg.map((itam,index)=>{
               let suu=0;
             itam.order_list.map(itam1=>{
                 suu+=itam1.count
             })
             console.log(suu)
            this.$set(this.msg[index],"summm",suu);
         
           })
           
           console.log(this.msg)
       }
   },
   mounted() {
       this.getData1()

      
   },
   watch: {

   },
   computed: {
       
   },
   filters:{
       sun(val){
           return Number(val).toFixed(2)
       }

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
.min{
    width: 100%;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 8px 0px;
    border-bottom:1px solid rgb(238,238,238);
    
}
.zuida{
    width: 100%;
    // display: flex;
    // justify-content: center;
    margin: 10px 0px;
    background-color: white;
}
.wai{
  
    background-color:rgb(238,238,238);
    padding: 2px 0px;
}
.wai>div{
    margin: 0px 5px;
}
.ig{
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(238,238,238);
    border-radius: 10%;
}
.ig1{
    width: 60px;
}
.edg{
    width: 200px;
   
    font-size: 14px;
}
.rng{
    font-size: 16px;
}
.omg{
    display: flex;
    justify-content: space-around;
    border-bottom:1px solid rgb(238,238,238);
}
.omg>div{
    margin: 10px 0px;
}
.rng2{
    color: rgb(100,100,100);
    font-size: 12px;
}
.nab{
    font-size: 15px;
}
</style>