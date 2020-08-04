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
       this.getData(this.id)
       this.id=this.$route.query.id
       console.log(this.id)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>