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
        id:""
     }
   },
   methods: {
       getData(){
           this.$api.oneData(this.id).ten(res=>{
            console.log(res)
           }).catch(err=>{

           })
       }
       

   },
   mounted() {
    //    this.id=this.$route.query.id
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>