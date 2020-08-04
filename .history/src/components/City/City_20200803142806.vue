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
.box1 {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.box {
  position: absolute;
  left: 10px;
  top: 15px;
}
</style>