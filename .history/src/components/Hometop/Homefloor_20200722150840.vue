<template>
 <div>
     <div class="boxmax">
         <div>1F</div>
         <div>休闲食品</div>
     </div>
     <div class="box">
         <div v-for="(item,index) in msg4" :key="index" class="box2">
            
               <div class="box1"> <img :src="item.image" style="width:100%"></div>
                
             
        </div>
      


     </div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg4:{
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
       console.log(this.msg4)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.boxmax{
    width: 100%;
    display: flex;
    justify-content: center;
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

</style>