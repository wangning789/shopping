<template>
 <div>
       <div>
            <div class="box">购物车</div>
           <div class="box1"> <van-icon name="shopping-cart-o" class="tubiao" size="150px"/></div>
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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    height: 40px;
    width: 100%;
    border-bottom: 1px solid rgb(238,238,238);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}
.tubiao{
    color: rgb(213,63,58);
}
.box1{
    width: 200px;
    height: 200px;
    background-color: rgb(238,238,238);
    border-radius: 50%;
    position:absolute;
    left: 60px;
}
</style>