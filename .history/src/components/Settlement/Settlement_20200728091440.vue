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
         msg:"",
         num:"",
         arr:""
     }
   },
   methods: {

   },
   mounted() {
     this.msg= this.$route.query.msg
     this.num=this.$route.query.num

     this.msg.map(item=>{
         if(item.check===true){
             this.arr=item
         }
     })
     console.log(this.msg)
     console.log(this.num)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>