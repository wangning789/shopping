<template>
  <div>
    <div class="box">商品分类</div>
   
    <div>
      <div class="box2">
        <van-tabs v-model="active" v-if='arr' >
          <div v-for="(item,index) in arr[activeKey*1].bxMallSubDto" :key="index">
            <van-tab :title="item.mallSubName" @click="getData2(item,index)"></van-tab>
          </div>
        
        </van-tabs>
      </div>

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
          <van-sidebar-item :title="item.mallCategoryName" @click="getData(item,index)" />
        </div>
      </van-sidebar>
    </div>

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
      
     
    };
  },
  methods: {
    getData(item,index) {
       this.id=this.arr[index].bxMallSubDto[0].mallSubId
      this.$api
        .ClassData(this.id)
        .then(res => {
          this.msg = res;
          console.log(this.msg);
        })
        .catch(err =>{
            console.log(err)
        });
    },

     getData2(item,index) {
       let id=this.arr[0].bxMallSubDto[index].mallSubId
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


       getData1(){
    this.$api.HomeData().then(res=>{
        this.arr=res.data.category
        console.log(this.arr)
    }).catch()
},


    // clickid(item,index){
    //   this.id=this.arr[index].bxMallSubDto[0].mallSubId
    //   console.log(index)
    // }

    
  },

  mounted() {
   
    this. getData1()

   
   
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