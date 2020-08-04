<template>
 <div>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="oranges">
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

  .van-swipe-item{
      background-color: rosybrown;
       line-height: -20px;
  }
  .box>img{
      width:100%;
      height: 100%;
  }
</style>