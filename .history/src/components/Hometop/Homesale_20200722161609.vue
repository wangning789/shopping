<template>
 <div>
     <div v-for="(item,index) in msg8" :key="index">
         <div><img :src="item.image"></div>

     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg8:{
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
       console.log(this.msg8)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
img{
    width: 50%;
}
</style>