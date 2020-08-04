<template>
 <div>
     <div class="box">
         <div class="box1">
             <div v-for="(item,index) in msg1" :key="index" class="box2">
                 <div class="box3">
                     <div class="box4"><img :src="item.image" class="tupian"></div>
                     <div>{{item.mallCategoryName}}</div>
                 </div>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg1:{
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
 console.log(this.msg1)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    width: 100vw;
     display: flex;
     justify-content: center;
     margin-top:10px;
}
.box1{
    width: 90vw;
    border-radius:10px;
    background-color: gold;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
}
.tupian{
    width: 50px;
    height: 50px;
}
.box3{
   font-size: 12px;
}

</style>