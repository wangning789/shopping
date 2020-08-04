<template>
  <div>
    <div class="max">
      <van-icon @click="click" name="arrow-left" />
    </div>
    <div class="box">评价中心</div>

    <div class="box1">
      <div><van-rate v-model="value" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" /></div>
      <div>{{this.arr.comment_time}}</div>
    </div>

    <div>
        <div>评论：</div>
        <div class="box2">{{this.arr.content}}</div>
    </div>

    <div class="box3">
        <div class="box4"><img :src="arr1.image_path" class="box4"></div>
        <div class="box5">{{arr1.name}}</div>
        <div><van-button type="primary" size="mini">加入购物车</van-button></div>
    </div>

    <div class="box6"><van-button type="primary" size="large">返回</van-button></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr: "",
      arr1:'',
      value:0
    };
  },
  methods: {
    click() {
      this.$router.back();
    }
  },
  mounted() {
    this.arr = this.$route.query.arr;
    this.arr1=this.arr.goods[0]
    console.log(this.arr1);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.max {
  position: absolute;
  top: 15px;
  left: 10px;
}
.box1{
    display: flex;
    align-items: center;
}
.box1>div{
    margin: 20px 20px;
}
.box2{
    height: 150px;
    width: 100%;
    border-bottom: 1px solid rgb(238,238,238);
    font-size: 13px;
    margin: 10px 0px;
}
.box4{
    width: 80px;
}
.box5{
    width: 150px;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.box3{
    display: flex;
    
    align-items: center;
}
.box3>div{
    margin: 0px 10px;
}
</style>