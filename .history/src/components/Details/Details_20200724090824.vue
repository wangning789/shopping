<template>
 <div>
    <div>
        <div class="go"><div class="goto"><van-icon name="arrow-left" /></div></div>
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
                    <div @click="clickxdd" v-if="num===0">点击收藏:&nbsp;<van-icon name="like" /></div>
                    <div @click="clickcnn"  v-if="num===1">取消收藏:&nbsp;<van-icon class="box123" name="like" /></div>
                    
                </div>
            </div>
        </div>
        <div class="box3">
            <div class="box4">
                <div class="box44">
                    <div><van-icon name="fire-o" /></div>
                    <div class="box444">有赞的店</div>
                    <div class="box4444">官方</div>
                </div>
                <div>进入店铺</div>
            </div>
        </div>

        <!-- 详情和评论 -->
        <van-tabs v-model="active">
  <van-tab title="商品详情">
     <div v-html="this.msg.detail"></div>
  </van-tab>
  <van-tab title="商品评论"></van-tab>
  
</van-tabs>
       
       
       
        
    </div>
 </div>
</template>

<script>
import { Toast } from 'vant';
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
        num:"",
        goods:{},
       active:0
       
     }
   },
   methods: {
       
       
    //    获取商品数据
       getData(){
           this.$api
           .oneData(this.id).then(res=>{
               this.msg=res.goods.goodsOne
               this.goods=res.goods.goodsOne
           
            console.log(this.goods)
           }).catch()
       },

        // 点击收藏
       clickxdd(){
           this.num=1
           this.$api
           .paymentData(this.goods).then(res=>{
              if(res.code===200){
                  Toast('收藏成功');
              }else{
                   Toast('收藏失败');
              }
            console.log(res)
           }).catch()
       },
       clickcnn(){
           this.num=0
       },

        
      

   },
   mounted() {
      
     
       this.id=this.$route.query.id
       console.log(this.id)
      
       this.getData()

            // 查询收藏
     this.$api
           .SeeData({id:this.id}).then(res=>{
               this.num=res.isCollection
            console.log(res)
           }).catch()
      
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.go{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(238,238,238,50);
    margin: 10px 10px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.goto>van-icon{
    height: 20px;
    
}

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
      margin: 15px 0px;
      border: 1px solid rgb(238,238,238);
      height: 40px;
      width: 99%;
       display: flex;
          align-items: center;
          justify-content: center;
  }
  .box444{
      font-size: 15px;
  }
  .box4444{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius:5px;
      font-size:15px;
      width: 40px;
      height: 20px;
      background-color:rgb(255,68,68);
      color: white;
      }
      .box44{
          display: flex;
      }
      .box4{
          display: flex;
          justify-content: space-between;
          width: 90%;
          font-size: 14px;
      }
      .box44>div{
          margin: 0px 3px;
      }
      
</style>