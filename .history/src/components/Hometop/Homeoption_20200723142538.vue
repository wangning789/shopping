<template>
 <div>
     <!-- 推荐页面和分类连动 -->
     <div class="box">
         <div class="box1">
             <div v-for="(item,index) in msg1" :key="index" class="box2">
                 <div class="box3" @click="click(item,index)">
                     <div class="box4"><img :src="item.image" class="tupian"></div>
                     <div>{{item.mallCategoryName}}</div>
                 </div>
             </div>
         </div>
     </div>
     <div class="box5"><img :src="this.msg2.PICTURE_ADDRESS"></div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg1:{
           type:Array
       },
       msg2:{
           type: Object 
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
 console.log(this.msg2)
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
    background-color:white;
    display: flex;
    justify-content: space-between;
    padding: 12px 10px;
}
.tupian{
    width: 50px;
    height: 50px;
}
.box3{
   font-size: 12px;
}
.box5>img{
    width:98vw;
    margin: 10px 0px;
    margin-bottom:20px;
}

</style>