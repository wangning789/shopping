<template>
 <div>
     <div class="box">商品分类</div>
 <div>
         <van-sidebar v-model="activeKey">
            <div class="box1">
                <van-sidebar-item title="新鲜水果" />
                <van-sidebar-item title="中外名酒" />
                <van-sidebar-item title="营养奶品" />
                <van-sidebar-item title="食品饮料" />
                <van-sidebar-item title="个人护理" />
            </div>
        </van-sidebar>
        <van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
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
activeKey:""
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

</style>