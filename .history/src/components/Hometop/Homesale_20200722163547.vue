<template>
 <div class="boxmax">
    <div class="box">
         <div v-for="(item,index) in msg8" :key="index">
            <div class="box1"><img :src="item.image" style="width:48vw"></div>
            <div class="box2">{{item.name}}</div>
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
.boxmax{
    width: 100vw;
    display: flex;
    justify-content: center;
}

.box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
     justify-content: center;
     background-color: white;
    
}
.box1{
    display: flex;
     
 
    justify-content: center;
}
.box2{
    width: 48vw;
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

</style>