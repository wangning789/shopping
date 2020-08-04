<template>
 <div class="boxmax">
     <div class="boxmin">热销商品</div>
    <div class="box">
         <div v-for="(item,index) in msg8" :key="index">
            <div class="box1"><img :src="item.image" style="width:48vw"></div>
            <div class="box2">{{item.name}}</div>
            <div class="box3">
                <div>${{item.mallPrice}}</div>
                <div class="box4">${{item.price}}</div>
            </div>
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
   text-align: center;
}
.box3{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 5px 0px;
}
.box3>div{
    margin: 0px 5px;
}
.box4{
    color: red;
    font-size: 12px;
     text-decoration:line-through
}


</style>