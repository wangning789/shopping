<template>
 <div>
     <div id="wrapper" ref="wrapper">
<ul class="container">
   <li  v-for="(item,index) in msg3" :key="index"><img :src="item.image"></li>
   <li></li>
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
        // this.scroll = new BScroll('.wrapper')
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

#wrapper{
    display: flex;
    overflow: hidden;
}
</style>