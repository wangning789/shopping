<template>
 <div>
     <div class="box">商品分类</div>
 <div>
         <van-tabs v-model="active">
            <div class="box2">
                <van-tab title="标签 1"></van-tab>
                <van-tab title="标签 2"></van-tab>
                <van-tab title="标签 3"></van-tab>
                <van-tab title="标签 4"></van-tab>
            </div>
        </van-tabs>

         <van-sidebar v-model="activeKey">
            <div class="box1">
                <van-sidebar-item title="新鲜水果" />
                <van-sidebar-item title="中外名酒" />
                <van-sidebar-item title="营养奶品" />
                <van-sidebar-item title="食品饮料" />
                <van-sidebar-item title="个人护理" />
            </div>
        </van-sidebar>
    
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
activeKey:"",
active:0
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
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 10px 0px;
    border-bottom:2px solid rgb(238,238,238);
}
.box1{
    height: 95vh;
    background-color:rgb(247,248,250);
}
.box2{
    width: 80vw;
}

</style>