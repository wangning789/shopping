<template>
 <div>
     <div class="box">会员中心</div>
     <div class="box1">
         <div class="box11">
             <div><div class="box2"></div></div>
            <div class="box3">欢迎你:{{arr}}</div>
            <div class="box4">退出登陆</div>
         </div>
     </div>

     <div class="box5">
         <div class="box6">
             <div class="box7"><van-icon class="tubiao" name="pending-payment" /><div class="box8">待付款</div></div>
            <div class="box7"><van-icon class="tubiao" name="shop-o" /><div class="box8">待发货</div ></div>
            <div class="box7"><van-icon class="tubiao" name="logistics" /><div class="box8">待收获</div></div>
            <div class="box7"><van-icon class="tubiao" name="description" /><div class="box8">评价</div></div>
            <div class="box7"><van-icon class="tubiao" name="points" /><div class="box8">已完成</div></div>   
         </div>
     </div>

     <div class="max">
         <div><van-icon class="xingbiao" name="pending-payment" /></div>
         <van-cell is-link title="基础用法" />
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
         arr:'',
     }
   },
   methods: {
       get(){
        this.arr=  localStorage.getItem("usa")
            console.log(this.arr)
       }
   },
   mounted() {
    this.get()
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
       
        background-color: rgb(238,238,238);
       
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
        display: flex;
        justify-content: center;
    }
    .box5{
        display: flex;
        justify-content: center;
        padding: 10px 0px;
        border-bottom: 1px solid rgb(238,238,238);
    }
    .tubiao{
        font-size: 30px;
        margin: 5px 0px;

    }
    .box6{
        width: 90%;
        justify-content: space-between;
        display: flex;
    }
    .box7{
        width: 18%;
        display: flex;
        align-items: center;
        flex-direction: column;
        
    }
    .box8{
        font-size: 15px;
    }
    .max{
        display: flex;
        align-items: center;
    }
    .xingbiao{
        font-size: 15px;
    }
   
</style>
