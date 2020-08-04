<template>
 <div>
   <div class="box"></div>
 </div>
</template>

<script>
import axios from "axios"
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        
     }
   },
   methods: {
getData(){
    this.$api.HomeData().then(res=>{
      this.msg=res.data
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
  width: 300px;
  height: 500px;
  background-color: red;
}
</style>