<template>
 <div>
     <div class="box">
         <div class="box1">

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

</style>