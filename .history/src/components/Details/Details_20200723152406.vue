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
        id:"24afea564e5248b5a2bc59da95f09911"
     }
   },
   methods: {
       getData(){
           this.$api
           .oneData(this.id).then(res=>{
            console.log(res)
           }).catch(err=>{
               console.log(err)
           })
       },

   },
   mounted() {
       
    //    this.id=this.$route.query.id
    //    console.log(this.id)
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