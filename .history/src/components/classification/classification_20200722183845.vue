<template>
 <div>
     <div class="box">商品分类</div>
 <div>
         <div class="box2">
             <van-tabs v-model="active">
           
                <van-tab title="新鲜水果"></van-tab>
                <van-tab title="热带水果"></van-tab>
                <van-tab title="苹果/梨"></van-tab>
                <van-tab title="柑橘橙柚"></van-tab>
           
        </van-tabs>
         </div>

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
         msg:'',
activeKey:"",
active:0,
id:'2c9f6c946016ea9b016016f79c8e0000'
     }
   },
   methods: {
         getData(){
    this.$api.ClassData(this.id).then(res=>{
        this.msg=res
        console.log(res)
    }).catch()
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
    position: absolute;
    right: 0px;
    height: 100px;
}

</style>