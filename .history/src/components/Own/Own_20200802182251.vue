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

    <div>
        <van-cell-group>
            <van-field v-model="value1" label="用户名" placeholder="请输入用户名"  disabled/>
            <van-field v-model="value2" label="昵称" placeholder="请输入用户名" />
            <van-field v-model="value3" label="性别" placeholder="请输入用户名" />
            <van-field v-model="value4" label="邮箱" placeholder="请输入用户名" />
            <van-field v-model="value5" label="出生日期" placeholder="请输入用户名" />
        </van-cell-group>
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
        value1:'',
        value2:'',
        value3:'',
        value4:'',
        value5:''
     }
   },
   methods: {
        click(){},

      
   },
   mounted() {
      this.$api.ObtainData().then(res=>{
                this.msg=res.userInfo
                 this.value1=this.msg.nickname
                 this.value2=this.msg.username
                console.log(this.msg)
            }).catch()

    
     
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
    border-bottom:1px solid rgb(238,238,238);
    
}
.box3{display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;

}
.box4{
    width: 50px;
}
</style>
