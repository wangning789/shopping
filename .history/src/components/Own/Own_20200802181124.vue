<template>
 <div>
     <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">个人信息</div>
    <div class="box2">
        <div class="box3">
            <div>头像</div>
            <div class="box4"><img :src="this.msg.avatar" class="box4"></div>
        </div>
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
        msg:''
     }
   },
   methods: {
        click(){},

        getData(){
            this.$api.ObtainData().then(res=>{
                this.msg=res.userInfo
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
    width: 100%;
    display: flex;
    justify-content: center;
    
}
.box3{display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;

}
.box4{
    width: 80px;
}
</style>
