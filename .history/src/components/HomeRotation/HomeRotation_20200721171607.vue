<template>
 <div>
<div class="box"></div>
<van-swipe :autoplay="3000" class="my-swipe">
  <van-swipe-item v-for="(item,index) in msg" :key="index"><img class="box3" v-lazy="item.slides" /></van-swipe-item>
 
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
         
  images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
     }
   },
   methods: {

   },
   mounted() {
      console.log(this.msg)
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
    
    text-align: center;
 
  }
  .box3{
      width: 100vw;
      height: 180px;
  }

</style>