<template>
 <div>
     <div class="box">商品分类</div>
 <div class="box1">
         <van-sidebar v-model="activeKey">
            <van-sidebar-item title="新鲜水果" />
            <van-sidebar-item title="中外名酒" />
            <van-sidebar-item title="营养奶品" />
            <van-sidebar-item title="食品饮料" />
            <van-sidebar-item title="个人护理" />
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

</style>