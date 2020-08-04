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
        msg:'',
        city:''
     }
   },
   methods: {
    getData(){
    this.$api.HomeData().then(res=>{
      this.msg=res
      // console.log(res)
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