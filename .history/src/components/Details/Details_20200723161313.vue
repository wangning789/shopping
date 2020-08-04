<template>
 <div>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><div class="box"><img :src="this.msg.image_path" alt=""></div></van-swipe-item>
            <van-swipe-item><div class="box"> <img :src="this.msg.image_path" alt=""></div></van-swipe-item>
        </van-swipe>

       
       
       
        
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
 .my-swipe{
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: rosybrown;


  }
  .box{
      width: 120vw;
      height: 120%;
  }
</style>