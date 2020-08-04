<template>
 <div>
<div class="box"></div>
<van-swipe :autoplay="3000" class="my-swipe">
  <van-swipe-item v-for="(item,index) in msg" :key="index"><img class="box3" v-lazy="item.image" /></van-swipe-item>
 
</van-swipe>
 </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant'

Vue.use(Lazyload);
 export default {
   name: '',
   props: {
       msg:{type:""}
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
    height: 55px;
    width: 100vw;
}
 .my-swipe {
    color: #fff;
    font-size: 20px;
    margin: 50px 0px;
    
    text-align: center;
 
  }
  .box3{
      width: 100vw;
      height: 180px;
  }

</style>