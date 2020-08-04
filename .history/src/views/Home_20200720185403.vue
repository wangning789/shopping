<template>
 <div>
{{name}}
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
        mag:""
     }
   },
   methods: {
getData(){
    this.$api.HomeData().then().catch()
}
   },
   mounted() {
     this.getData
   },
   watch: {

   },
   computed: {
     name(){
      return this.$store.state.name
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>