<template>
  <div>
    
      <div class="box">
        <van-icon class="max" @click="click" name="arrow-left" />
      </div>
      <div class="box1">评论中心</div>
      <div class="aa"></div>
    

    <div class="box2">
      <img src="../../../evaluate.jpg" style="width:100%" />
    </div>
    <div class="bb"></div>

    <div>
      <van-tabs v-model="active">
        <van-tab title="未评论">
          <div v-for="(item,index) in msg" :key="index">
            <van-card :title="item.name" :thumb="item.image_path">
              <template #footer>
                <van-button size="small" type="warning" @click="clickck(item,index)">评价晒图</van-button>
              </template>
            </van-card>
          </div>
        </van-tab>
        <van-tab title="已评论">
            <div v-for="(item,index) in arr" :key="index">
                <van-card :title="item.goods[0].name" :thumb="item.goods[0].image_path">
              <template #footer>
                <van-button size="small" type="warning" @click="clickck(item,index)">查看评价</van-button>
              </template>
            </van-card>
            </div>
        </van-tab>
      </van-tabs>
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
      active: "",

      msg: "",

      arr:""

    };
  },
  methods: {
    click() {
      this.$router.back();
      
    },

    clickck(item,index){
        this.$router.push({
          path: '/Jet',
          query: {
            msg:item
          }
        })
    },

    // 已评价
    getData(){
        this.$api.EvaluatedData().then(res=>{
            this.arr=res.data.list
            console.log(this.arr)
        }).catch()
    },

        // 未评价
    getData11() {
      this.$api
        .NotevaluatedData()
        .then(res => {
          this.msg = res.data.list;
          console.log(this.msg);
        })
        .catch();
    }
  },
  mounted() {
    this.getData11();
    this.getData()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
// .max{
//     position: fixed;
//     top: 0px;
//     left: 0px;
// }
.aa{
    height: 40px;
    width: 100%;
}
.box1 {

    position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
 height: 40px;
 background-color: white;
  border-bottom: 1px solid rgb(238, 238, 238);
  width: 100%;
  z-index: 10;
}
.box {
  position: fixed;
  left: 10px;
  top: 15px;
   z-index: 11;
}
.box2 {
    position: fixed;
  width: 100%;
  height: 200px;
   z-index: 10;
}
.bb{
    height: 220px;
    width: 100%;
   
}

</style>