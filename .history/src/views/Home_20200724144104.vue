<template>
 <div class="box">
   <Hometop class="box2"></Hometop>
   <HomeRotation class="box1" v-if="msg.length>0" :msg="msg"></HomeRotation>
   <Homeoption v-if="msg1.length>0||msg2.length>0" :msg1="msg1" :msg2="msg2"></Homeoption>
   <!-- <Homebotton></Homebotton> -->
   <Homeslide v-if="msg3.length>0" :msg3="msg3"></Homeslide>
   <Homefloor v-if="msg4.length>0" :msg4="msg4"  :msg5="msg5" :msg6="msg6" :msg7="msg7"></Homefloor>
   <Homesale  v-if="msg8.length>0" :msg8="msg8"></Homesale>


 </div>
</template>

<script>
import axios from "axios"
import Hometop from"../components/Hometop/Hometop"
import HomeRotation from "../components/Hometop/HomeRotation"
import Homeoption from"../components/Hometop/Homeoption"
// import Homebotton from"../components/Hometop/Homebotton"
import Homeslide from"../components/Hometop/Homeslide"
import Homefloor from"../components/Hometop/Homefloor"
import Homesale from"../components/Hometop/Homesale"
 export default {
   name: '',
   props: {
   
   },
   components: {
       Hometop,
       HomeRotation,
       Homeoption,
      //  Homebotton,
       Homeslide,
       Homefloor,
       Homesale
   },
   data () {
     return {
      //  轮播图
        msg:"",
        // 选择框
        msg1:'',
        // 广告
        msg2:"",
        // 滑动图
        msg3:"",
        // 1F,2F,3F
        msg4:"",
        msg5:'',
        msg6:"",
        msg7:"",
        // 热销商品
        msg8:"",
        // 定位
        city:''
     }
   },
   methods: {
    getData(){
    this.$api.HomeData().then(res=>{
      // 轮播图数据
      this.msg=res.data.slides
      // 选择框
      this.msg1=res.data.category
      // 广告
      this.msg2=res.data.advertesPicture
      // 滑动图
      this.msg3=res.data.recommend
      // 1F,2F,3F
      this.msg4=res.data.floor1
      this.msg5=res.data.floor2
      this.msg6=res.data.floor3
      this.msg7=res.data.floorName
      // 热销商品
      this.msg8=res.data.hotGoods
      console.log(res)
    }).catch()
}
   },
   mounted() {
     this.getData()
   

   
   },
   watch: {

   },
   computed: {
  
   }
 }
</script>

<style scoped lang='scss'>
.box{
  background-color:rgb(238,238,238);

}
// .box1{
//   margin-top:55px;
// }

</style>