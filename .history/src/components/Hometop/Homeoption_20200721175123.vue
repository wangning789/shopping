<template>
 <div>
     <div class="box">
         <div class="box1">
             <div v-for="(item,index) in msg1" :key="index">
                 <div>
                     <div class="tupian"><img :src="item.image"></div>
                     <div></div>
                 </div>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg1:{
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
 console.log(this.msg1)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    width: 100vw;
     display: flex;
     justify-content: center;
     margin-top:10px;
}
.box1{
    width: 95vw;
    border-radius:10px;
    height: 50px;
    background-color: gold;
}
</style>