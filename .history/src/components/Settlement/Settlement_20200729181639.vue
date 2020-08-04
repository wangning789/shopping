<template>
 <div>
     <!-- 顶部 -->
      <div class="box" @click="toshopping"><van-icon class="max" name="arrow-left" /></div>
     <div class="box1">订单结算</div>

    <div class="box2">
        <!-- 没有默认地址时候显示 -->
        <div v-if="this.dizhi===null" @click="tianjia" class="box3">点击添加收获地址</div>
        <!-- 有默认地址时候显示 -->
        <div v-if="this.dizhi" class="max">
            <div @click="clickdizhi"><van-icon name="arrow" class="tubiao1" /></div>
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
        :price="item.present_price"
        :desc="item.name"
        :thumb="item.image_path"
        />
        </div>

        <div class="dibu">
          <div class="anniu">
              <div>共计：{{bbcc | num}}</div>
              <div class="tijiao"><van-button type="danger" @click="clicksubmit">点击提交</van-button></div>
          </div>
        </div>
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
         num:"",
         arr:[],
         bbc:"",
        orderId:[],
        shuzi:'',

       idDirect:true,

        // 判断哪里来的中间数
        number1:"",

        dizhi1:"",

        //  默认地址
        dizhi:"",

         chosenAddressId:''
     }
   },
   methods: {
       tianjia(){
           this.$router.push('Address1')
       },

    //    返回购物车
       toshopping(){
           this.$router.back()
           sessionStorage.removeItem("number")
           
       },
    //    点击提交
       clicksubmit(){
           this.shuzi=Number(this.shuzi)
           this.arr.map(item=>{
            this.orderId.push(item.cid)
           })
          let address=this.dizhi.address
            let tel=this.dizhi.tel
            let orderId=this.orderId
            let totalPrice=this.bbcc
           
            let count=this.arr[0].count
            this.getData1(address,tel,orderId,totalPrice,this.idDirect,count)
            sessionStorage.removeItem("number")
            console.log(orderId)
       },

    //    点击选择地址
    clickdizhi(){
        this.$router.push("/Address1")
    },
      
       getData1(address,tel,orderId,totalPrice,idDirect,count){
           this.$api.CardpaymentData({address:address,tel:tel,orderId:orderId,totalPrice:totalPrice,idDirect:idDirect,count:count}).then(res=>{
               if(res.code===200){
                   Toast.success('提交成功');
                   this.$router.push('/Me')
               }else{
                   Toast.fail('提交失败');
               }
            console.log(res)
           }).catch();
       },

        // 默认地址数据
       getData(){
           this.$api.DefaultData().then(res=>{
      
           this.dizhi=res.defaultAdd
      
               console.log(res)
           }).catch();
       }
   },
   mounted() {
    //    获取从购物车跳转到结算页面的变量
    
       this.shuzi=this.$route.query.shuzi
       console.log(this.shuzi)
      
            this.getData()
       
       console.log(this.number)

    // 存在本地的购物车数据
     this.msg= JSON.parse(sessionStorage.getItem("msg"))
   
       console.log(this.number)

  
    // 拿到提交订单的数据
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
    //    计算总价
        bbcc(){
            let cnn=0
            this.arr.map(item=>{
                cnn+=item.count*item.present_price
            })
            return cnn
        }
   },
   filters:{
       num(val){
           return Number(val).toFixed(2)
          
       }
    
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
.dibu{
    width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: white;
}
.anniu{
    display: flex;
    align-items: center;
    justify-content:flex-end;
}
.tijiao{
    margin-left:20px;
}

</style>