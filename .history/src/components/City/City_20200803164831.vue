<template>
  <div>
    <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">选择城市</div>
    <div>
      <van-search v-model="value" placeholder="请输入城市关键词" />
    </div>
    <div class="box2">热门城市</div>
    <div class="mini">
      <div class="box3">
        <van-grid :column-num="3" :gutter="20">
          <van-grid-item v-for="(item,index) in msg" :key="index" :text="item.name" @click="clickhot(item,index)" />
        </van-grid>
      </div>
        
   <div v-if="num===0">
        <van-index-bar  :index-list="arr">
      <div v-for="(item,index) in arr" :key="index">
          <van-index-anchor :index="item" />
          <div v-for="(item1,index1) in arr1[index]" :key="index1">
              <van-cell :title="item1.name" />
          </div>
      </div>
      </van-index-bar>
   </div>

    <van-index-bar>
   <div v-if="num===1">
       <div v-for="(item,index) in msg2" :key="index">
           <van-index-anchor  />
            <van-cell :title="item" />
       </div>
   </div>
     </van-index-bar>
    </div>
  </div>
</template>

<script>
import city from "../../../city";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city,
      msg: [],
      value: "",
      arr:[],
      arr1:[],
      msg1:[],
      msg2:[],
      num:0


    };
  },
  methods: {
      clickhot(item,index){
          this.$router.push({
              path:"/",
              query:{
                  name:item.name
              }
          })
         
      },

    //  返回
    click() {
      this.$router.back();
    }
  },
  mounted() {
    this.msg = this.city.data.hotCities;
    
    for(let i in this.city.data.cities){
        this.arr.push(i)
        this.arr1.push(this.city.data.cities[i])
    }
  },
  watch: {
      value(val){
          this.msg1=[]
           this.arr1.filter((item,index)=>{
           item.filter((item1,index1)=>{
                  this.msg1.push(item1.name)
              }) 
          })
           if(val===""){
               this.num=0
           }else{
               this.num=1
           }

        this.msg2=this.msg1.filter(item=>{
            return JSON.stringify(item).includes(val)
      })
      

      }

  },
  computed: {}
};
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
.box2 {
  margin: 10px 15px;
  font-size: 15px;
}
.box4 {
  font-size: 15px;
  background-color: rgb(238, 238, 238);
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0px;
}

.mini {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>