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
        <div class="box2">
            <div class="box22">
                <div>运费:&nbsp;{{this.msg.__v}}</div>
                <div>剩余:&nbsp;{{this.msg.amount}}</div>
                <div class="box2222">
                    <div @click="clickxdd" v-if="num===-1">点击收藏:&nbsp;<van-icon name="like" /></div>
                    <div @click="clickcnn"  v-if="num===0">取消收藏:&nbsp;<van-icon class="box123" name="like" /></div>
                    
                </div>
            </div>
        </div>
        <div class="box3"></div>
       
       
       
        
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
        msg:'',
        num:-1
     }
   },
   methods: {
       clickcnn(){
           this.num=-1
       },
        clickxdd(){
            this.num=0
        },

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
      margin: 0px 12px;
      font-size: 16px;
      color: red;
  }
  .box22{
      width: 80%;
      display: flex;
      font-size: 14px;
      align-items: center;
      justify-content: space-between;
  }
  
  .box2{
     
       border-bottom: 1px solid rgb(238,238,238);
      height: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
  }
  .box123{
      color: red;
  }
  .box3{
      margin: 20px 0px;
      border: 1px solid rgb(238,238,238);
  }
</style>