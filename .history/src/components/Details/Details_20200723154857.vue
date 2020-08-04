<template>
 <div>
    <div>
        <img :src="msg.image" alt="">
    </div>
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
        id:"",
        msg:''
     }
   },
   methods: {
       getData(){
       
           this.$api
           .oneData(this.id).then(res=>{
               this.msg=res.goods.goodsOne
            console.log(this.msg)
           }).catch()
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