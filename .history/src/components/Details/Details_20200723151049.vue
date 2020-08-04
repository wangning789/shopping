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
           this.$api.oneData("24afea564e5248b5a2bc59da95f09911").ten(res=>{
            console.log(res)
           }).catch(err=>{

           })
       }
       

   },
   mounted() {
       this.getData()
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