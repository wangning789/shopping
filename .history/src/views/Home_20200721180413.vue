<template>
 <div class="box">
   <Hometop></Hometop>
   <HomeRotation v-if="msg.length>0" :msg="msg"></HomeRotation>
   <Homeoption v-if="msg1.length>0" :msg1="msg1"></Homeoption>
 </div>
</template>

<script>
import axios from "axios"
import Hometop from"../components/Hometop/Hometop"
import HomeRotation from "../components/Hometop/HomeRotation"
import Homeoption from"../components/Hometop/Homeoption"
 export default {
   name: '',
   props: {
   
   },
   components: {
       Hometop,
       HomeRotation,
       Homeoption
   },
   data () {
     return {
      //  轮播图
        msg:"",
        // 选择框
        msg1:'',
        // 定位
        city:''
     }
   },
   methods: {
    getData(){
    this.$api.HomeData().then(res=>{
      // 轮播图数据
      this.msg=res.data.slides
      this.msg1=res.data.category
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