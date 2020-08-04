<template>
 <div>
     <div class="box">
         <div v-for="(item,index) in msg4" :key="index">
         <div class="box1">
             <div v-if="index===0"><img :src="item.image"></div>
             <div>
                 <div v-if="index===1"><img :src="item.image"></div>
                 <div v-if="index===2"><img :src="item.image"></div>
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
   flex-wrap: wrap;
}
img{
    flex: 1;
    width: 50%
    
}
</style>