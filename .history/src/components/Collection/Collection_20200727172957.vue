<template>
 <div>
     <div><van-icon class="box" name="arrow-left" /></div>
     <div class="box1">我的收藏</div>
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
     }
   },
   methods: {
       getData(){
           this.$api.OrderseeData().then(res=>{
               console.log(res)
           })..catch()
       }
   },
   mounted() {
      this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    position: absolute;
    left: 10px;
    top: 15px;
}
.box1{
    display: flex;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid rgb(238,238,238);
}

</style>