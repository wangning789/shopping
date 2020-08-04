<template>
 <div>
     <div class="boxmax">商品推荐</div>
     <div class="wrapper" ref="wrapper">
<ul class="container">
   <li class="box" v-for="(item,index) in msg3" :key="index">
       <div class="box1">
          <div class="box3"> <img :src="item.image"></div>
            <div class="box2">{{item.goodsName}}</div>
       </div>
      
   </li>
   
</ul>

</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
   
    
}

.wrapper{
    // display: flex;
    overflow: hidden;
}
.container{
    display: flex;
    // flex: 1;
}
.box1{
    margin: 0px 1px;
  display: flex;
  flex-flow: column;
  font-size: 12px;
    
}
.box3>img{
     width: 100px;
    height: 100px;
}
.box{
    background-color: white;
    border: 1px solid rgb(238,238,238);
}

</style>
