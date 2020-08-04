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
        id:"418fc60784d04e71beffe1ce5174c947"
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