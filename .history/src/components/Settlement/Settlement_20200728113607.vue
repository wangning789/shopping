<template>
 <div>
     <!-- 顶部 -->
      <div class="box"><van-icon class="max" name="arrow-left" /></div>
     <div class="box1">订单结算</div>

    <div class="box2">
        <!-- 没有默认地址时候显示 -->
        <div v-if="this.arr.length===0" class="box3">点击添加收获地址</div>
        <!-- 有默认地址时候显示 -->
        <div v-if="this.arr.length>0" class="max">
            <van-icon name="arrow" class="tubiao1" />
            <div><van-icon name="location-o" class="tubiao" /></div>
            <div class="box4">
                <div class="box5">
                    <div>收获人：{{this.dizhi.name}}</div>
                    <div>电话：{{this.dizhi.tel}}</div>
                </div>
            </div>
            <div class="box6">收获地址：{{this.dizhi.address}}</div>
        </div>
        <div class="tubian"><img src="../../../server/caitiao.jpg" alt="" style="width:100%"></div>
    </div>

        <!-- 结算商品内容 -->
        <div v-for="(item,index) in arr" :key="index">
                <van-card
        :num="item.count"
        :price="item.mallPrice"
        :desc="item.name"
        :thumb="item.image_path"
        />
        </div>

        <div>
            <van-submit-bar :price="3050" button-text="{{this.dizhi.tel}}" @submit="onSubmit" />
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

       onSubmit(){

       },

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
.tupian{
    width: 100%;
}
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
    padding: 45px 0px;
    text-decoration: underline;
    
}
.box4{
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
   
   
}
.box5{
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.max{
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
   
}
.box6{
    width: 60%;
    position: absolute;
    top: 85px;
    left:75px;
}
.tubiao{
    position: absolute;
    font-size: 25px;
    left: 20px;
    top: 70px;
}
.tubiao1{
    position: absolute;
    right: 10px;
    top: 80px;
     font-size: 20px;
}
</style>