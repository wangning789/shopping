<template>
 <div>
      <div class="box"><van-icon class="max" name="arrow-left" /></div>
     <div class="box1">订单结算</div>

    <div class="box2">
        <div class="box3">点击添加收获地址</div>
        <img src="../../../server/caitiao.jpg" alt="">
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
         num:"",
         arr:[],

        //  默认地址
        dizhi:"",

         chosenAddressId:''
     }
   },
   methods: {
       getData(){
           this.$api.DefaultData().then(res=>{
               this.dizhi=res.defaultAdd
               console.log(res)
           }).catch();
       }
   },
   mounted() {
       this.getData()

     this.msg= JSON.parse(sessionStorage.getItem("msg"))
       console.log(this.msg)

  

     this.msg.map(item=>{
         if(item.check===true){
             this.arr.push(item)
             console.log(this.arr)
         }
     })
     
    //  console.log(this.num)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box1{
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    border-bottom:1px solid rgb(238,238,238);
}
.box{
    position: absolute;
    left: 10px;
    top: 15px;
}
.box3{
    display: flex;
    justify-content: center;
    padding: 40px 0px;
    text-decoration: underline;
}
</style>