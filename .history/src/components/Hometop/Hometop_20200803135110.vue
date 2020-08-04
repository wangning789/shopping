<template>
  <div>
    <div class="box">
      <div class="box5">{{city}}</div>
      <van-icon name="arrow-down" />
      
      <div class="box1">
        <form action="/">
          <van-search 
            class="box2"
            @input="focus"
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
          >
            <template #action>
              <div v-if="Pretty===0">搜索</div>
              <div v-if="Pretty===1" @click="onSearch">取消</div>
            </template>
          </van-search>
        </form>
      </div>
    </div>
    <div class="edg" v-if="Pretty===1"></div>
    
  <div v-if="Pretty===1&&this.value===''" >
     <div class="hisr"><van-button type="default"  size="mini" @click="clickabc">删除历史</van-button></div>
   <div class="lishi">
      <div  v-for="(item,index) in some4" :key="index">
        <div class="his">{{item}}</div>
    </div>
   </div>
  </div>


    <div v-for="(item,index) in arr" :key="index">
      <div class="rng">
        <div v-html="item.name" @click="clickcnn(item,index)"></div>
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
      value:"",
      msg:1,
      msg1:0,
      name:'',

      arr:[],

      // 搜索历史
      some:[],
      some1:[],
      some2:[],
      some3:[],
      some4:[]
    };
  },
  methods: {
    // 删除最近搜索
    clickabc(){

      localStorage.removeItem("history")
      this.some4.splice(0)
     
    },

    onSearch() {
      this.value= ""
      this.arr=[]
      this.$store.commit("setPretty",this.msg1)
    },
    onCancel() {},

    clickcnn(item,index){
      this.$store.commit("setPretty",this.msg1)
      this.$router.push({
        path:'/Details',
        query:{
          id:item.id
        }
      })

      let a=localStorage.getItem("history")
      if(a===null){
        this.some.push(this.value)
       localStorage.setItem("history",JSON.stringify(this.some))
      }else{
        this.some1=JSON.parse(localStorage.getItem("history"))
        this.some2.push(this.value)
         this.some3=this.some2.concat(this.some1)
        localStorage.setItem("history",JSON.stringify(this.some3))
      }
      
    },
    // 监听事件监听输入框的值
    focus(val){
      
      this.$store.commit("setPretty",this.msg)
      if(!val){
      
       this.arr=[]
     }else{
        this.getData(val)
         
     }
    },


  


    // 那数据和高亮
    getData(val){
      this.$api.SearchData({value:val}).then(res=>{
          this.arr=res.data.list
          
        

          // 替换字体
          this.arr.map(item=>{

           item.name=item.name.replace(new RegExp(val, 'g'),`<span style="color:red">${val}</span>`)
          
          })
          console.log(this.arr)
      }).catch()
    },
  },
  mounted() {
     //    拿到本地最近搜所的数据
    this.some4 = JSON.parse(localStorage.getItem("history"));
   
   // 去掉重复的内容
 if(localStorage.getItem("history")){
   this.some4 = JSON.parse(localStorage.getItem("history"));

    const res = new Map();
    this.some4 = this.some4.filter(
      item => !res.has(item) && res.set(item, 1)
    );
    if(this.some4.length>5){
    this.some4.splice(5)
   
  }
 }


 console.log(this.some4)


    // 定位
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
  //  value(val){
    //  if(this.value===""){
    //    this.arr=[]
    //  }else{
    //     this.getData(val)
    //  }
    
    
  //  }
  },
  computed: {
     Pretty(){
       return this.$store.state.Pretty
     }
  }
};
</script>

<style scoped lang='scss'>
.search-text{
color: red;
}
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
.box1 {
  width: 300px;
}
// .box2{
//       background-color: rgb(238,238,238);
// }
.box5 {
  margin: 0px 8px;
}
.edg {
  height: 55px;
  width: 100%;
}
.rng {
  background-color: white;
  div {
    font-size: 15px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    align-items: center;
  }
}
.lishi{
  display: flex;
  background-color: white;
}
.his{
  font-size: 14px;
  margin: 5px 10px;
}
.hisr{
  background-color: white;

}
</style>