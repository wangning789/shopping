<template>
 <div>
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
#wrapper{
    overflow: hidden;
    display: flex;
   
}

.container{
    display: flex;
}
.box1{
    margin: 0px 2px;
     width: 30px;
    height: 30px;
}
.box1>img{
    
}
</style>