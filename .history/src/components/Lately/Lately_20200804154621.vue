<template>
  <div>
    <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">最近浏览</div>
    <div v-for="(item,index) in arr" :key="index">
      <van-card :price="item.present_price" :title="item.name" :thumb="item.image_path" @click-thumb="clickcnn(item,index)">
        <template #footer>
          <van-button size="mini" @click="clickon(item,index)">删除</van-button>
        </template>
      </van-card>
    </div>
   
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      msg: [],
      arr: [],
      show:false
    };
  },
  methods: {
    clickcnn(item,index){
      this.$router.push({
        path:"/Details",
        query:{
          id:item.id
        }
      }
      )
    },
    click() {
      this.$router.back()
    },

    clickon(item,index){


 this.arr.splice(index,1)
      localStorage.setItem("browse",JSON.stringify(this.arr))
  
     
    }
  },
  mounted() {
    if(localStorage.getItem("browse")){

      //    拿到本地最近浏览的数据
      let a=localStorage.getItem("usa")
    this.msg = JSON.parse(localStorage.getItem(a+"browse"));
    console.log(msg)

    // 去掉重复的内容
    const res = new Map();
    this.arr = this.msg.filter(
      item => !res.has(item.id) && res.set(item.id, 1)
    );
  if(this.arr.length>9){
    this.arr.splice(10)
   
  }
    }

   

    
   
  },
  watch: {},
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
</style>