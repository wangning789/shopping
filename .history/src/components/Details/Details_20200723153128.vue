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
       
           this.$api
           .oneData(this.id).then(res=>{
            console.log(res)
           }).catch()
       },


      
       getData1(){
    this.$api.HomeData().then(res=>{
        this.arr=res.data.category
        console.log(this.arr)
    }).catch()

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