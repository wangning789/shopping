<template>
 <div>
     <div class="from"><van-icon name="arrow-left" /></div>
     <div class="box">编辑地址</div>
     <div class="box1">暂无收获地址</div>



     <div ><van-button class="anniu" type="danger" size="large" @click="clickon">新增地址</van-button></div>
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

     }
   },
   methods: {
       clickon(){
           this.$router.push('/Newaddress')
       },

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
    .box{
        display: flex;
        justify-content: center;
        padding: 15px 0px;
        border-bottom:1px solid rgb(238,238,238);
    }
    .from{
        position: absolute;
        left: 15px;
        top: 20px;
    }
    .box1{
        display: flex;
        justify-content: center;
        font-size: 20px;
        margin: 30px 0px;
        color: rgb(100,100,100);
    }
    .anniu{
        position: absolute;
        bottom: 0px;
    }
</style>