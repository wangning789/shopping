<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         arr:'',
     }
   },
   methods: {

   },
   mounted() {
        this.arr= this.$router.push({
          path: '/particulars',
          query: {
            id: id
          }
        })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>
