<template>
 <div>
    <div class="box"><van-icon class="max" @click="click"  name="arrow-left" /></div>
     <div class="box1">评论中心</div>
     <div class="box2"><img src="../../../evaluate.jpg" style="width:100%"></div>

     <div>
         <van-tabs v-model="active">
            <van-tab title="未评论"></van-tab>
            <van-tab title="已评论"></van-tab>
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

     }
   },
   methods: {
       click(){
           this.$router.back()
       },

       getData11(id){
        this.$api.SetdefaultData({id:id}).then(res=>{
            console.log(res)
        }).catch();
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
.box1{
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    border-bottom:1px solid rgb(238,238,238);
}
.box{
    position: absolute;
    left: 10px;
    top: 15px;
}
.box2{
    width: 100%;
    height: 200px;
}
</style>