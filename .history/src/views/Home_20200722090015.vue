<template>
 <div class="box">
   <Hometop></Hometop>
   <HomeRotation v-if="msg.length>0" :msg="msg"></HomeRotation>
   <Homeoption v-if="msg1.length>0||msg2.length>0" :msg1="msg1" :msg2="msg2"></Homeoption>
   <Homebotton></Homebotton>
   <Homeslide v-if="msg3.length>0" :msg3="msg3"></Homeslide>
 </div>
</template>

<script>
import axios from "axios"
import Hometop from"../components/Hometop/Hometop"
import HomeRotation from "../components/Hometop/HomeRotation"
import Homeoption from"../components/Hometop/Homeoption"
import Homebotton from"../components/Hometop/Homebotton"
import Homeslide from"../components/Hometop/Homeslide"
 export default {
   name: '',
   props: {
   
   },
   components: {
       Hometop,
       HomeRotation,
       Homeoption,
       Homebotton,
       Homeslide
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
</style>