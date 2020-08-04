<template>
 <div>
     <div class="box">
         <div v-for="(item,index) in msg4" :key="index">
            
                <img :src="item.image" style="width:100%">
                
             
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
.box{
    display: grid;
     grid-template-columns: 1fr 1fr 1fr;
       grid-template-rows: 1fr 1fr;
}

// img{
   
//     width: 48%
    
// }

img:first-child{
     grid-row-start: 1;
    grid-row-end: 3;

}
// .box1{
//     display: flex;
// }
</style>