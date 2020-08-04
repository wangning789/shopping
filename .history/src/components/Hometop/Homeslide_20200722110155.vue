<template>
 <div>
     <div class="boxmax">商品推荐</div>
     <div id="wrapper" ref="wrapper">
<ul class="container">
   <li class="box" v-for="(item,index) in msg3" :key="index">
       <div class="box1">
           <img :src="item.image">
            {{item.goodsName}}
       </div>
      
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
      new BScroll(this.$refs.wrapper ,{click:true,scrollX:true});
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
    align-items: center;
    margin: 1px 0px;
    
}
#wrapper{
    overflow: hidden;
}

.container{
    display: flex;
}
.box1{
    margin: 0px 1px;
  display: flex;
  flex-flow: column;
    
}
.box1>img{
     width: 100px;
    height: 100px;
}

</style>
