<template>
 <div>
   <Hometop></Hometop>
   <HomeRotation v-if="msg.length>0" :msg="msg"></HomeRotation>
 </div>
</template>

<script>
import axios from "axios"
import Hometop from"../components/Hometop/Hometop"
import HomeRotation from "../components/HomeRotation/HomeRotation"
 export default {
   name: '',
   props: {
   
   },
   components: {
       Hometop,
       HomeRotation
   },
   data () {
     return {
      //  轮播图
        msg:"",
        // 定位
        city:''
     }
   },
   methods: {
    getData(){
    this.$api.HomeData().then(res=>{
      // 轮播图数据
      this.msg=res.data.slides
      console.log(this.msg)
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

</style>