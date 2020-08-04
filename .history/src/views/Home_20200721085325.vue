<template>
 <div>

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

</style>