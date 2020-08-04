<template>
 <div>
    <div class="box"><van-icon class="max" @click="click"  name="arrow-left" /></div>
     <div class="box1">我的订单</div>
     <div>
       <van-card
 
  price="2.00"
 
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  
  <template #footer>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
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
         msg:[],
         arr:[]
     }
   },
   methods: {
     click(){

     }
   },
   mounted() {

    //    拿到本地最近浏览的数据
    this.msg=JSON.parse(localStorage.getItem("browse"))

    // 去掉重复的内容
    const res = new Map();
    this.arr=this.msg.filter(item=>!res.has(item.id) && res.set(item.id, 1))
    console.log(this.arr)
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