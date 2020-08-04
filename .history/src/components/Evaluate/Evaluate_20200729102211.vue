<template>
 <div>
    <div class="box"><van-icon class="max" @click="click"  name="arrow-left" /></div>
     <div class="box1">评论中心</div>
     <div class="box2"><img src="../../../evaluate.jpg" style="width:100%"></div>
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
       }
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
</style>