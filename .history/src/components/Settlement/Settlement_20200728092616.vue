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
         arr:[]
     }
   },
   methods: {
          // 购物车数据
    getData() {
      this.$api
        .ShoppingData()
        .then(res => {
          console.log(res)
        })
        .catch();
    },
   },
   mounted() {
       this.getData()

    //  this.msg= this.$route.query.msg
    //  this.num=this.$route.query.num

    //  this.msg.map(item=>{
    //      if(item.check===true){
    //          this.arr.push(item)
    //          console.log(this.arr)
    //      }
    //  })
     
    //  console.log(this.num)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>