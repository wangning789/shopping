<template>
 <div>
     <div class="box">
         <div v-for="(item,index) in msg4" :key="index">
         <div><img :src="item.image"></div>
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
}
</style>