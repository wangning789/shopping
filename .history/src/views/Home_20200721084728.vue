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
        msg:{}
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
     console.log(this.msg)
   },
   watch: {

   },
   computed: {
  
   }
 }
</script>

<style scoped lang='scss'>

</style>