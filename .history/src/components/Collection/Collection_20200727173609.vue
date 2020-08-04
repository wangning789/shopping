<template>
 <div>
     <div><van-icon class="box" name="arrow-left" /></div>
     <div class="box1">我的收藏</div>

     <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
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
               this.msg=res.list
               console.log(this.msg)
           }).catch()
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