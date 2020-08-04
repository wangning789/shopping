<template>
  <div>
    <div class="max">
      <van-icon @click="click" name="arrow-left" />
    </div>
    <div class="box">评价中心</div>

    <div class="box1">
      <div class="box2">
        <img :src="msg.image_path" style="width:100%" />
      </div>
      <div class="box3">
        <div>商品评论</div>
        <div>
          <van-rate v-model="value" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
        </div>
      </div>
    </div>

    <div>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="评价"
        type="textarea"
        maxlength="100"
        placeholder="请输入评价"
        show-word-limit
      />
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
      value: 0,
      message:''
    };
  },
  methods: {
    click() {
      this.$router.back();
    },

   
  },
  mounted() {
    this.msg = this.$route.query.msg;
    console.log(this.msg);
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
.box1 {
  display: flex;
  height: 150px;
  align-items: center;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.box1 > div {
  margin: 0px 10px;
}
.box2 {
  width: 120px;
}
.box3 > div {
  margin: 20px 0px;
}
</style>
