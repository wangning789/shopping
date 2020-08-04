<template>
  <div>
    <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">最近浏览</div>
    <div v-for="(item,index) in arr" :key="index">
      <van-card :price="item.present_price" :title="item.name" :thumb="item.image_path">
        <template #footer>
          <van-button size="mini" @click="clickon(item,index)">删除</van-button>
        </template>
      </van-card>
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
      msg: [],
      arr: []
    };
  },
  methods: {
    click() {},

    clickon(item,index){
      this.msg.splice(index,1)
     
    }
  },
  mounted() {
    //    拿到本地最近浏览的数据
    this.msg = JSON.parse(localStorage.getItem("browse"));

    // 去掉重复的内容
    const res = new Map();
    this.arr = this.msg.filter(
      item => !res.has(item.id) && res.set(item.id, 1)
    );
    console.log(this.arr);
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