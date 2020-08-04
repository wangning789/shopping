<template>
 <div>
    <div class="box">
         <div v-for="(item,index) in msg8" :key="index">
            <div><img :src="item.image"></div>

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
img{
    width: 50%;
}
.box{
    width: 100%;
    display: flex;
    
}
</style>