<template>
 <div>
    <div class="box">
         <div v-for="(item,index) in msg8" :key="index">
            <div class="box1"><img :src="item.image" style="width:40vw"></div>

        </div>
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       msg8:{
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
       console.log(this.msg8)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

.box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
}
.box1{
    display: flex;
}

</style>