<template>
  <div>
    <div class="box">
      <div class="box5">成都市</div>
      <div class="box1">
        <form action="/" >
          <van-search class="box2" @focus="focus" v-model="value" show-action  placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
              <div v-if="Pretty===0">搜索</div>
              <div v-if="Pretty===1" @click="onSearch">取消</div>
            </template>
          </van-search>
        </form>
      </div>
    </div>
    <div class="edg" v-if="Pretty===1"></div>
    <div v-for="(item,index) in arr" :key="index">
        <div class="rng">
          <div>{{item.name}}</div>
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
      city: "",
      value: "",
      msg:1,
      msg1:0,

      arr:[]
    };
  },
  methods: {
    onSearch() {
      this.$store.commit("setPretty",this.msg1)
    },
    onCancel() {},

    focus(){
      this.$store.commit("setPretty",this.msg)
    },

    getData(){
      this.$api.SearchData({value:this.value}).then(res=>{
          this.arr=res.data.list
          console.log(this.arr)
      }).catch()
    },
  },
  mounted() {
    let _this = this;
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB"
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        _this.city = data.addressComponent.city;
        console.log(data);
        // data是具体的定位信息
      }

      function onError(data) {
        console.log(data);
        // 定位出错
      }
    });
  },
  watch: {
   value(val){
     this.getData()
   }
  },
  computed: {
     Pretty(){
       return this.$store.state.Pretty
     }
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  font-size: 15px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 20px;
  background-color: white;
  left: 0px;

}
.box1{
    width: 300px;
   
}
// .box2{
//       background-color: rgb(238,238,238);
// }
.box5{
 margin: 0px 8px;
}
.edg{
  height: 55px;
  width: 100%;
}
.rng{
  background-color: white;
  div{
    font-size: 15px;
  }
}
</style>