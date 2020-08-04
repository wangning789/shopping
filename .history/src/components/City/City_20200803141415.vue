<template>
 <div>

 </div>
</template>

<script>
import city from"../../../city"
 export default {
   name: '',
   props: {
       type:{
           city:Array
       }
   },
   components: {
       city
   },
   data () {
     return {

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