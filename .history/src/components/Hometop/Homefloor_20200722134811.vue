<template>
 <div>
     <div v-for="(item,index) in msg4" :key="index">
         <!-- <div><img :src="item."></div> -->

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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>