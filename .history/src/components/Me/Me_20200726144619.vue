<template>
 <div>
     <div class="box">会员中心</div>
     <div class="box1">
         <div class="box11">
             <div class="box2"></div>
            <div class="box3">欢迎你:</div>
            <div class="box4">退出登陆</div>
         </div>
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

     }
   },
   methods: {

   },
   mounted() {
       localStorage.getItem(usa)
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
        width: 100%;
        padding: 15px 0px;
        border-bottom: 1px solid rgb(238,238,238);
    }
    .box1{
        width: 100vw;
        display: flex;
        background-color: rgb(238,238,238);
        justify-content: center;
        padding: 20px 0px;
    }
    .box2{
        width: 60px;
        height: 60px;
        border-radius:50%;
        background-color:white;
    }
    .box3{
        font-size: 20px;
    }
    .box4{
        font-size: 15px;
    }
    .box11>div{
        margin: 10px 0px;
    }
</style>
