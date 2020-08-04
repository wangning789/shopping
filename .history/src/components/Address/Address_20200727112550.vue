<template>
 <div>
     <div class="from"><van-icon name="arrow-left" /></div>
     <div class="box">编辑地址</div>
     <div class="box1" v-if="msg.length===0">暂无收获地址</div>

     <van-address-list v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>



     <div ><van-button class="anniu" type="danger" size="large" @click="clickon">新增地址</van-button></div>
 </div>
</template>

<script>
import { Toast } from 'vant';
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
       clickon(){
           this.$router.push('/Newaddress')
       },


        getData(){
            this.$api.UserData().then(res=>{
                this.msg=res.address
                
                console.log(res)
            }).catch();
        }
   },
   mounted() {
       this. getData()
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
        padding: 15px 0px;
        border-bottom:1px solid rgb(238,238,238);
    }
    .from{
        position: absolute;
        left: 15px;
        top: 20px;
    }
    .box1{
        display: flex;
        justify-content: center;
        font-size: 20px;
        margin: 30px 0px;
        color: rgb(100,100,100);
    }
    .anniu{
        position: absolute;
        bottom: 0px;
    }
</style>