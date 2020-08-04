<template>
 <div>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
            <van-swipe-item><div class="box"><img :src="this.msg.image_path" alt=""></div></van-swipe-item>
            <van-swipe-item><div class="box"> <img :src="this.msg.image_path" alt=""></div></van-swipe-item>
        </van-swipe>
        <div class="box1">
            <div class="box11">{{this.msg.name}}</div>
            <div class="box111">&yen;{{this.msg.present_price}}</div>
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
        id:"",
        msg:''
     }
   },
   methods: {
       getData(){
       
           this.$api
           .oneData(this.id).then(res=>{
               this.msg=res.goods.goodsOne
            console.log(this.msg)
           }).catch()
       },


   

   },
   mounted() {
       
       this.id=this.$route.query.id
       console.log(this.id)

       this.getData()
      
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

  .box>img{
      width:100%;
      height: 100%;
  }
  .box1{
      border: 1px solid rgb(238,238,238);
      height: 60px;
      width: 99%;
  }
  .box11{
      margin: 8px 10px;
  }
  .box111{
      margin: 8px 0px;
  }
</style>