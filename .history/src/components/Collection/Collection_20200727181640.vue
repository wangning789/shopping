<template>
 <div>
     <div><van-icon class="box" name="arrow-left" /></div>
     <div class="box1">我的收藏</div>

 <div v-for="(item,index) in msg" :key="index">
         <van-card
  :price="item.present_price"
  :desc="item.name"
  :thumb="item.image_path"
>
  <template #footer>
    <van-button size="mini" @click="clickdelete(item,index)">删除</van-button>
  </template>
</van-card>
 </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         msg:"",
     }
   },
   methods: {
       getData(){
           this.$api.DeleteData().then(res=>{
               this.msg=res.data.list
               console.log(this.msg)
           }).catch()
       },

       getData1(id){
           this.$api.CancelData({id:id}).then(res=>{
               console.log(res)
           }).catch()
       },

       clickdelete(item,index){
          
           let id=item.cid
           this.getData1(id)
           this.getData()
           console.log(item)
       }

   },
   mounted() {
      this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    position: absolute;
    left: 10px;
    top: 15px;
}
.box1{
    display: flex;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid rgb(238,238,238);
}

</style>