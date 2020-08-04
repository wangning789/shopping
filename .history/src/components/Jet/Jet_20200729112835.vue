<template>
 <div>
     <div class="max"><van-icon  @click="click" name="arrow-left" /></div>
     <div class="box">评价中心</div>
     <div>
         <div><img src="msg.image_path"></div>
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
</style>
