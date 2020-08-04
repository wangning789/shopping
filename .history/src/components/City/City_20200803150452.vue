<template>
 <div>
      <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">选择城市</div>
    <div><van-search v-model="value" placeholder="请输入城市关键词" /></div>
    <div class="box2">热门城市</div>
   <div class="mini">
        
        <div class="box3">
            <van-grid :column-num="3"  :gutter="10">
            <van-grid-item v-for="(item,index) in msg" :key="index"  :text="item.name" />
            </van-grid>
        </div>
    
   </div>

 </div>
</template>

<script>
import city from"../../../city"
 export default {
   name: '',
   props: {
      
   },
   components: {
       
   },
   data () {
     return {
         city,
         msg:[],
         value:''
     }
   },
   methods: {
      click(){
          thisn.$router.back()
      }
           
      

   },
   mounted() {
       console.log(this.city)
    this.msg=this.city.data.hotCities
    console.log(this.msg)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box1 {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.box {
  position: absolute;
  left: 10px;
  top: 15px;
}
.box2{
    margin: 10px 15px;
    font-size: 15px;
}
.box4{
    font-size: 15px;
    background-color: rgb(238,238,238);
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

  margin: 10px 0px;
}
.box3{
    
}
.mini{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  
}
</style>