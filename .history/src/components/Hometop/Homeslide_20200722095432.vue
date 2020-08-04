<template>
 <div>
     <div class="boxmax">商品推荐</div>
     <div id="wrapper" ref="wrapper">
<ul class="container">
   <li class="box" v-for="(item,index) in msg3" :key="index">
       <div class="box1"><img :src="item.image"></div>
   </li>
   
</ul>
</div>


 </div>
</template>

<script>
import BScroll from "better-scroll"
 export default {
   name: '',
   props: {
       msg3:{
           type:Array
       }
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
       console.log(this.msg3)
      new BScroll(this.$refs.wrapper ,{click: true,scrollX:true});
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.boxmax{
    width: 100vw;
    height: 30px;
    background-color: white;
    display: flex;
    font-size: 15px;
}
#wrapper{
    overflow: hidden;
    display: flex;
   
}

.container{
    display: flex;
}
.box1{
    margin: 0px 2px;
    
}
.box1>img{
     width: 100px;
    height: 100px;
}
</style>