<template>
 <div>
     <div class="box">
         <div v-for="(item,index) in msg4" :key="index">
             <!-- <div v-if="index===0"><img :src="item.image"></div> -->
     </div>
      <div v-for="(item,index) in msg4" :key="index">
             <!-- <div v-if="index===1"><img :src="item.image"></div> -->
     </div>


     </div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg4:{
           type:Array
       }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {
       console.log(this.msg4)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    display: flex;
  
}
img{
   
    width: 50%
    
}
// .box1{
//     display: flex;
// }
</style>