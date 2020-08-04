<template>
  <div>
    <!-- 没有商品的情况下 -->
    <div v-if="badge===0">
      <div class="box">购物车</div>
      <div class="box1">
        <van-icon name="shopping-cart-o" class="tubiao" size="150px" />
      </div>
      <div class="box2">购物车还是空的</div>
      <van-button class="box3" round type="default" @click="clickgo">点击去购物</van-button>
    </div>
    <!-- 有商品的情况下 -->
    <div>
      <div class="box">购物车</div>
      <div class="max">
        <div>
          <van-checkbox v-model="checked" checked-color="#D53F3A" shape="square"  @click="changeAll">
            <div v-if="checked">取消全选</div>
            <div v-if="checked===false">全选</div>
          </van-checkbox>
        </div>
        <div>
          <div>合计:&nbsp;¥</div>
          <div>请确认订单</div>
        </div>
      </div>

      <div class="max2" v-if="num===1">
        <div>
          <van-button type="danger">删除</van-button>
        </div>
        <div>
          <van-button type="warning">去结算</van-button>
        </div>
      </div>
            <!-- 购物车的商品 -->
      <div v-for="(item,index) in msg" :key="index">
          <div class="max3">
              <div><van-checkbox v-model="item.check"  checked-color="#D53F3A" shape="square" @change="changedan" @click="clickcdd(item,index)"></van-checkbox></div>
              <div class="max5" @click="onpen"><img :src="item.image_path" style="width:100%"></div>
              <div class="max6">
                  <div>{{item.name}}</div>
                  <div class="max7">
                      <div class="max8">¥{{item.mallPrice}}</div>
                      <div class="suan">
                        <div class="jia" @click="clickjia(item,index)">+</div>
                        <div class="num">{{item.count}}</div>
                        <div class="jian" @click="clickjian(item,index)">-</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      // 购物车数据
        msg:'',
        // 购物车加减
        count:'',
        id:"",
        mallPrice:'',
        num:0,
        check:'',

      badge: "",
      checked: false,
      value:'',
      // checked1:true
    };
  },
  methods: {
    // 清除按钮消失与隐藏
    clickcdd(item,index){
  
     if(this.msg[index].check===true){
       this.num=1

     }else if( this.checked){
       this.num=0
     }
    },
    // 全选
    changeAll(){
    if(this.checked){
      this.msg.map(item=>{
        item.check=true
      })
    }else{
      this.msg.map(item=>{
        item.check=false
      })
    }
     
    },

    changedan(){
      this.checked=this.msg.every(item=>{
        
        return item.check===true
      })
    },
    
   onpen(){
       console.log(this.value)
   },
  // 加商品
  clickjia(item,index){
    this.msg[index].count++
    this.id=this.msg[index].cid
    this.mallPrice=this.msg[index].mallPrice
    this.count= this.msg[index].count
    this.postData(this.count,this.id,this.mallPrice)
    console.log(this.count)
  },

  // 减商品
  clickjian(item,index){
    this.msg[index].count--
    let id=this.msg[index].cid
    let mallPrice=this.msg[index].mallPrice
    let count= this.msg[index].count
    this.postData(count,id,mallPrice)

  },

    clickgo() {
      this.$router.push("/");
    },
    // 购物车数据
    getDatacatda() {
      this.$api
        .ShoppingData()
        .then(res => {
            this.msg=res.shopList
           
            // this.count=res.shopList[0].count
          let arr = res.shopList.length;
          this.badge = arr;
          console.log(this.msg)
        })
        .catch();
    },

    // 购物车加减商品
      postData(count,id,mallPrice) {
      this.$api
        .CardData({count:count,id:id,mallPrice:mallPrice})
        .then(res => {
          
          // console.log(res)
        })
        .catch();
    }

  },
  mounted() {
    this.getDatacatda();
    // this.postData()
    console.log(this.msg)
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.tubiao {
  color: rgb(213, 63, 58);
}
.box1 {
  width: 200px;
  height: 200px;
  background-color: rgb(238, 238, 238);
  border-radius: 50%;
  position: absolute;
  left: 85px;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2 {
  position: absolute;
  left: 100px;
  top: 320px;
  margin: 20px 0px;
  font-size: 25px;
  color: rgb(92, 92, 92);
}
.box3 {
  width: 150px;
  position: absolute;
  left: 110px;
  top: 420px;
}
.max {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
}
.max > div {
  margin: 0px 20px;
}
.max2 {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.max2 > div {
  margin: 5px 5px;
}
.max3{
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom:1px solid rgb(238,238,238);
    
}
.max5{
    width: 80px;
    height: 80px;
    border: 1px solid rgb(238,238,238);
    
}
.max7{
    display: flex;
    width: 200px;
    justify-content: space-between;
    
}
.max6>div{
    margin: 20px 0px;
}
.max3>div{
    margin: 10px 10px;
}

.max6{
    color:rgb(213,63,58);
    font-size: 14px;
   
   
}
.suan{
  display: flex;
  align-items: center;
}
.jia{
  width: 30px;
  height: 30px;
  background-color: rgb(238,238,238);
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.jian{
  width: 30px;
  height: 30px;
  background-color: rgb(238,238,238);
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.suan>div{
  margin: 0px 5px;
}


</style>