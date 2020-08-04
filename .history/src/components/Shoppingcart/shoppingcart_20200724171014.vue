<template>
  <div>
    <!-- 没有商品的情况下 -->
    <div v-if="badge===0">
      <div class="box">购物车</div>
      <div class="box1">
        <van-icon name="shopping-cart-o" class="tubiao" size="150px" />
      </div>
      <div class="box2">购物车还是空的</div>
      <van-button class="box3" round type="default" @click="clickgo">点击去购物</van-button>
    </div>
    <!-- 有商品的情况下 -->
    <div>
      <div class="box">购物车</div>
      <div class="max">
        <div>
          <van-checkbox v-model="checked" checked-color="#D53F3A" shape="square">
            <div v-if="checked">取消全选</div>
            <div v-if="checked===false">全选</div>
          </van-checkbox>
        </div>
        <div>
          <div>合计:&nbsp;¥</div>
          <div>请确认订单</div>
        </div>
      </div>

      <div class="max2">
        <div>
          <van-button type="danger">删除</van-button>
        </div>
        <div>
          <van-button type="warning">去结算</van-button>
        </div>
      </div>

      <div>
          <div class="max3">
              <div><van-checkbox  v-model="checked1" checked-color="#D53F3A" shape="square"></van-checkbox></div>
              <div class="max5"></div>
              <div></div>
          </div>
        <!-- <div >
          <van-checkbox  v-model="checked1" checked-color="#D53F3A" shape="square"></van-checkbox>
        </div>
        <van-card price="2.00" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
          <template #footer>
            <van-stepper v-model="value" />
          </template>
        </van-card> -->
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
      badge: "",
      checked: false,
      value: "",
      checked1: ""
    };
  },
  methods: {
    clickgo() {
      this.$router.push("/");
    },
    // 购物车数据
    getDatacatda() {
      this.$api
        .ShoppingData()
        .then(res => {
          let arr = res.shopList.length;
          this.badge = arr;
          // console.log(res)
        })
        .catch();
    }
  },
  mounted() {
    this.getDatacatda();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.tubiao {
  color: rgb(213, 63, 58);
}
.box1 {
  width: 200px;
  height: 200px;
  background-color: rgb(238, 238, 238);
  border-radius: 50%;
  position: absolute;
  left: 85px;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2 {
  position: absolute;
  left: 100px;
  top: 320px;
  margin: 20px 0px;
  font-size: 25px;
  color: rgb(92, 92, 92);
}
.box3 {
  width: 150px;
  position: absolute;
  left: 110px;
  top: 420px;
}
.max {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
}
.max > div {
  margin: 0px 20px;
}
.max2 {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.max2 > div {
  margin: 5px 5px;
}
.max3{
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom:1px solid rgb(238,238,238);
}

</style>