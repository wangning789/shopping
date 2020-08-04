<template>
    <!-- 楼层页面 -->
 <div>
     <div class="boxmax">
         <div class="box3">1F</div>
         <div class="box4">{{this.msg7.floor1}}</div>
     </div>
     <div class="box">
         <div v-for="(item,index) in msg4" :key="index" class="box2">
               <div class="box1" @click="click(item,index)"> <img :src="item.image" style="width:100%"></div> 
        </div>
     </div>

     <div class="boxmax">
         <div class="box3">2F</div>
         <div class="box4">{{this.msg7.floor2}}</div>
     </div>
     <div class="box">
         <div v-for="(item,index) in msg5" :key="index" class="box2">
               <div class="box1" @click="click(item,index)"> <img :src="item.image" style="width:100%"></div> 
        </div>
     </div>

     <div class="boxmax">
         <div class="box3">3F</div>
         <div class="box4">{{this.msg7.floor3}}</div>
     </div>
     <div class="box">
         <div v-for="(item,index) in msg6" :key="index" class="box2">
               <div class="box1" @click="click(item,index)"> <img :src="item.image" style="width:100%"></div> 
        </div>
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg4:{
           type:Array
       },
       msg5:{
            type:Array
       },
       msg6:{
            type:Array
       },
        msg7:{
            type:Object
       },

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
    console.log(this.msg4)
    console.log(this.msg5)
    console.log(this.msg7)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.boxmax{
   
    display: flex;
    justify-content: center;
    margin: 10px 0px;
    align-items: center;
  
}
.box{
    display: grid;
     grid-template-columns: 1fr 1fr;
       grid-template-rows: 1fr 1fr 1fr;
       grid-auto-flow: row dense;
       background-color: white; 
}
img{
    width: 50% 
}

.box2:first-child{
     grid-row-start: 1;
    grid-row-end: 3;
}
.box1{
    border-top: 1px solid rgb(238,238,238);
      border-right: 1px solid rgb(238,238,238);
       border-left: 1px solid rgb(238,238,238);
}
.box3{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color:rgb(224,50,43);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box4{
    color: rgb(224,50,43);
}
</style>