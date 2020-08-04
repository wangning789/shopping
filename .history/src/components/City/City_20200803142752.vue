<template>
 <div>
      <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">最近浏览</div>
 </div>
</template>

<script>
import city from"../../../city"
 export default {
   name: '',
   props: {
      
   },
   components: {
       
   },
   data () {
     return {
         city,
     }
   },
   methods: {
      
           
      

   },
   mounted() {
       console.log(this.city)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>