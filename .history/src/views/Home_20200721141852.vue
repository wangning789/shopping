<template>
 <div>
   
 </div>
</template>

<script>
import axios from "axios"
import Hometop from "Hometop"
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        msg:''
     }
   },
   methods: {
    getData(){
    this.$api.HomeData().then(res=>{
      this.msg=res
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

</style>