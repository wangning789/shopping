<template>
 <div>
     <div class="max"><van-icon  @click="click" name="arrow-left" /></div>
     <div class="box">评价中心</div>
     <div class="box1">
         <div class="box2"><img :src="msg.image_path" style="width:100%"></div>
         <div></div>
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
         msg:'',
     }
   },
   methods: {
       click(){
           this.$router.back()
       }

   },
   mounted() {
       this.msg=this.$route.query.msg
       console.log(this.msg)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
display: flex;
justify-content: center;
padding: 10px 0px;
border-bottom: 1px solid rgb(238,238,238);
}
.max{
    position: absolute;
    top: 15px;
    left: 10px;
}
.box1{
    display: flex;
    height: 150px;
    align-items: center;
    border-bottom:1px solid rgb(238,238,238);
}
.box2{
    width: 120px;
}
</style>
