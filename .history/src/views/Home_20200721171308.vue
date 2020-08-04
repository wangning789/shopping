<template>
 <div>
   <Hometop></Hometop>
   <HomeRotation :msg="msg"></HomeRotation>
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
        msg:[],
        // 定位
        city:''
     }
   },
   methods: {
    getData(){
    this.$api.HomeData().then(res=>{
      this.msg=res.slides
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