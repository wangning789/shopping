<template>
 <div>
     <div @click="cnn"></div>
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
       cnn(){
             console.log(this.city)
       }

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