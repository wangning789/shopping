<template>
 <div>
     <div id="wrapper" ref="wrapper">
<ul class="container" v-for="(item,index) in msg3" :key="index">
   <li><img :src="item.image"></li>
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
}
</style>