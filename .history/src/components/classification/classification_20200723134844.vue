<template>
  <div>
    <div class="box">商品分类</div>
   <!-- 顶部导航 -->
    <div>
      <div class="box2">
        <van-tabs v-model="active" v-if='arr' @click="getData2" >
          <div v-for="(item,index) in arr[activeKey*1].bxMallSubDto" :key="index">
            <van-tab :title="item.mallSubName" ></van-tab>
          </div>
        
        </van-tabs>
      </div>

    <!-- 中间显示部分 -->
      <div class="box3">
        <div v-for="(item,index) in msg.dataList" :key="index">
        <div class="box4">
            <div class="box1"><img :src="item.image"></div>
            <div class="box9">
              <div class="box5">{{item.name}}</div>
              <div class="box6">
                <div class="box7">${{item.present_price}}</div>
                <div class="box8">${{item.orl_price}}</div>
              </div>
            </div>
        </div>
        </div>
      </div>

     
    <!-- 侧边导航 -->
    <div>
      <van-sidebar v-model="activeKey" >
        <div  v-for="(item,index) in arr" :key="index" >
          <van-sidebar-item :title="item.mallCategoryName" @click="cnn(item,index)" />
        </div>
      </van-sidebar>
    </div>

    </div>

     <div>
   
   <!-- 顶部导航栏 -->
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" dot>分类</van-tabbar-item>
  <van-tabbar-item icon="cart-o" badge="5">购物车</van-tabbar-item>
  <van-tabbar-item icon="manager-o" badge="20">我的</van-tabbar-item>
</van-tabbar>
 </div>

    

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
     
     
      msg: "",
      activeKey: "",
      active: 0,
      id: "",
      arr:'',
      arr1:""
      
     
    };
  },
  methods: {
    cnn(item,index){
      this.id=this.arr[index].bxMallSubDto[0].mallSubId
      console.log(this.id)
      this.getData(this.id)
    },

    // 拿到总数据
       getData1(){
    this.$api.HomeData().then(res=>{
        this.arr=res.data.category
        console.log(this.arr)
    }).catch()
},


    getData(id) {
      this.$api
        .ClassData(id)
        .then(res => {
          this.msg = res;
          console.log(this.msg);
        })
        .catch(err =>{
            console.log(err)
        });
    },

     getData2(item,index) {
       
       let id=this.arr[this.activeKey*1].bxMallSubDto[item].mallSubId
       console.log(item)
       console.log(index)
      this.$api
        .ClassData(id)
        .then(res => {
          this.msg = res;
          console.log(this.msg);
        })
        .catch(err =>{
            console.log(err)
        });
    },





  },

  mounted() {
  
    this. getData1()
    this.getData()
   
 
 this.$api.HomeData().then(res=>{
        this.arr1=res.data.category
        let id=this.arr1[0].bxMallSubDto[0].mallSubId
        console.log(this.arr1)
        this.getData(id)
    }).catch()
   
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 2px solid rgb(238, 238, 238);
}

.box2 {
  width: 80vw;
  position: absolute;
  right: 0px;
  height: 100px;
}
.box1>img{
  width: 80%;
}
.box1{
  width: 80px;
  height: 80px;
 border: 1px solid rgb(238,238,238);
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 0px 10px;
}
.box3{
  position: absolute;
  left: 100px;
  top:100px;
  height: 80vh;
  overflow: scroll;
 
}
.box4{
  display: flex;
  height: 100px;
  width: 99%;
  border: 1px solid rgb(238,238,238);
  align-items: center;
}
.box5{
  color: red;
  font-size: 14px;
  margin: 0px 10px;
  display: flex;
  flex-wrap: wrap;
}
.box6{
  display: flex;
  margin: 10px 10px;
  align-items: flex-end;
}
.box6>div{
  margin: 0px 10px;
}
.box7{
  color: red;
}
.box8{
  font-size: 12px;
  text-decoration:line-through
}
.box9{
  width: 170px;
}

</style>