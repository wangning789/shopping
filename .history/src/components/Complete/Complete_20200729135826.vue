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
      value:''
    };
  },
  methods: {
    click() {
      this.$router.back();
    }
  },
  mounted() {
    this.arr = this.$route.query.arr;
    console.log(this.arr);
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
</style>