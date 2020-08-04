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
           id=this.id
           this.$api
           .oneData(id).then(res=>{
            console.log(res)
           }).catch(err=>{
               console.log(err)
           })
       },

   },
   mounted() {
       
       this.id=this.$route.query.id
       console.log(this.id)

       this.getData()
      
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>