<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       id:{
           type:Array
       }
   },
   components: {

   },
   data () {
     return {
        id:""
     }
   },
   methods: {

   },
   mounted() {
       this.id=this.$route.query.id
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>