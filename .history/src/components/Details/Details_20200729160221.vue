<template>
  <div>
    <div>
      <!-- 后退按钮 -->
      <div class="go" @click="goto">
        <div class="goto">
          <van-icon class="gotogo" name="arrow-left" size="25px" />
        </div>
      </div>
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
        <van-swipe-item @click="open">
          <div class="box">
            <img :src="this.msg.image_path" alt />
          </div>
        </van-swipe-item>
        <van-swipe-item @click="open">
          <div class="box">
            <img :src="this.msg.image_path" alt />
          </div>
        </van-swipe-item>
      </van-swipe>
      <!-- 商品信息和价格 -->
      <div class="box1">
        <div class="box11">{{this.msg.name}}</div>
        <div class="box111">&yen;{{this.msg.present_price}}</div>
      </div>
      <!-- 运费和点击收藏取消 -->
      <div class="box2">
        <div class="box22">
          <div>运费:&nbsp;{{this.msg.__v}}</div>
          <div>剩余:&nbsp;{{this.msg.amount}}</div>
          <div class="box2222">
            <div @click="clickxdd" v-if="num===0">
              点击收藏:&nbsp;
              <van-icon name="like" />
            </div>
            <div @click="clickcnn" v-if="num===1">
              取消收藏:&nbsp;
              <van-icon class="box123" name="like" />
            </div>
          </div>
        </div>
      </div>
      <!-- 进入店铺，只是一个样式 -->
      <div class="box3">
        <div class="box4">
          <div class="box44">
            <div>
              <van-icon name="fire-o" />
            </div>
            <div class="box444">有赞的店</div>
            <div class="box4444">官方</div>
          </div>
          <div>进入店铺</div>
        </div>
      </div>

      <!-- 详情和评论 -->
      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <div v-html="this.msg.detail"></div>
        </van-tab>
<!-- 商品评论 -->
        <van-tab title="商品评论">
          <div class="min">
            <div class="min1">
              <van-icon name="user-o" />
            </div>
            <div class="min2">
              <div>名字</div>
              <div>
                <van-rate v-model="value2" :size="15" color="#ffd21e" void-icon="star" void-color="#eee"/>
              </div>
            </div>
            <div class="min3">2012-12-12 12:24:25</div>
          </div>
          <div>内容：</div>
          <div>fndjksdaka</div>
        </van-tab>
      </van-tabs>

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" :badge="badge" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" @click="Clickjiaru" />
        <van-goods-action-button type="danger" text="立即购买" @click="Clickcat" />
      </van-goods-action>
      <!-- 购买弹处框 -->
      <van-popup v-model="show" position="bottom" close-icon="close" closeable>
        <div class="tanchu">
          <div class="yiwa">
            <div class="erwa">
              <img :src="this.msg.image_path" />
            </div>
            <div class="sanwa">
              <div class="sanwason">{{this.msg.name}}</div>
              <div class="sanwason2">&yen;{{this.msg.present_price}}</div>
            </div>
          </div>
          <div class="siwa">
            <div class="wuwa">购买数量:{{value}}</div>
            <div class="liuwa">
              <div class="qiwa">剩余:&nbsp;{{this.msg.amount}}</div>
              <div class="bawa">每人限购10件</div>
            </div>
            <div class="jiuwa">
              <van-stepper v-model="value" min="0" max="10" />
            </div>
          </div>
          <div>
            <van-button class="goumai" type="danger" text="立即购买" @click="clickbuy" />
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      //  商品Id
      id: "",
      // 商品数据
      msg: "",
      // 中间变量判断是否收藏
      num: "",
      // 商品对象用于点击收藏
      goods: {},
      // v-model默认为0，默认为详情信息
      active: 0,
      show: false,
      value: 1,
      badge: "",

    //   评分
    value2:0,

      // 商品评论数据

      cid: "",
      msg1: []
    };
  },
  methods: {
    open() {
      ImagePreview([this.msg.image_path, this.msg.image_path]);
    },

    Clickbuy() {},

    //    点击商品评论
    clickpinglun() {
      let id = this.msg.id;
      let _id = this.msg._id;
      this.getDatacha(id, _id);
    },

    //    立即购买
    clickbuy() {
      this.cid = this.msg.id;
      this.$set(this.msg, "check", true);
      this.$set(this.msg, "count", this.value);
      this.$set(this.msg, "cid", this.cid);
      this.msg1.push(this.msg);

      sessionStorage.setItem("msg", JSON.stringify(this.msg1));

      this.$router.push("/Settlement");
      console.log(this.msg1);
    },

    //    点击购买
    Clickcat() {
      this.show = true;
    },

    //    返回上一层
    goto() {
      this.$router.go(-1);
    },

    //    获取商品数据
    getData() {
      this.$api
        .oneData(this.id)
        .then(res => {
          this.msg = res.goods.goodsOne;
          this.goods = res.goods.goodsOne;
          this.arr = res.goods.comment;

          console.log(this.arr);
        })
        .catch();
    },

    // 点击收藏
    clickxdd() {
      this.num = 1;
      this.$api
        .paymentData(this.goods)
        .then(res => {
          if (res.code === 200) {
            Toast("收藏成功");
          } else {
            Toast("收藏失败");
          }
          console.log(res);
        })
        .catch();
    },

    // 取消收藏
    clickcnn() {
      this.num = 0;
      this.$api
        .CancelData({ id: this.id })
        .then(res => {
          if (res.code === 200) {
            Toast(res.msg);
          } else {
            Toast(res.msg);
          }
          console.log(res);
        })
        .catch();
    },
    // 点击购买
    onClickButton() {},
    // 点击加入购物车
    Clickjiaru() {
      this.getDatacat(this.id);
    },
    //   加入购物车
    getDatacat(id) {
      this.$api
        .JoinData({ id: id })
        .then(res => {
          if (res.code === 200) {
            Toast(res.msg);
          } else {
            Toast(res.msg);
          }
          console.log(res);
        })
        .catch();
    },
    // 购物车数据
    getDatacatda() {
      this.$api
        .ShoppingData()
        .then(res => {
          let arr = res.shopList.length;
          this.badge = arr;
          console.log(res);
        })
        .catch();
    }
  },
  mounted() {
    this.getDatacatda();

    //    ID接收传值
    this.id = this.$route.query.id;
    console.log(this.id);

    this.getData();

    // 查询收藏
    this.$api
      .SeeData({ id: this.id })
      .then(res => {
        this.num = res.isCollection;
        console.log(res);
      })
      .catch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.min {
  height: 200px;
  width: 100%;
  background-color: wheat;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
}
.min1{
    font-size: 30px;
    margin: 10px 15px;
}
.min2{
    font-size: 15px;
    margin: 10px 30px;
}
.min3{
    margin: 20px 0px;
    font-size: 15px;
}
.tanchu {
  width: 100%;
  height: 250px;
}
.go {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(238, 238, 238);
  position: fixed;
  left: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 5;
}
.gotogo {
  margin: 12px 0px;
}

.box > img {
  width: 100%;
  height: 100%;
}
.box1 {
  border: 1px solid rgb(238, 238, 238);
  height: 60px;
  width: 99%;
}
.box11 {
  margin: 8px 10px;
}
.box111 {
  margin: 0px 12px;
  font-size: 16px;
  color: red;
}
.box22 {
  width: 80%;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
}

.box2 {
  border-bottom: 1px solid rgb(238, 238, 238);
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.box123 {
  color: red;
}
.box3 {
  margin: 15px 0px;
  border: 1px solid rgb(238, 238, 238);
  height: 40px;
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box444 {
  font-size: 15px;
}
.box4444 {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  width: 40px;
  height: 20px;
  background-color: rgb(255, 68, 68);
  color: white;
}
.box44 {
  display: flex;
}
.box4 {
  display: flex;
  justify-content: space-between;
  width: 90%;
  font-size: 14px;
}
.box44 > div {
  margin: 0px 3px;
}
.yiwa {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
}
.erwa {
  width: 95px;
  height: 95px;
  border: 1px solid rgb(238, 238, 238);
  margin: 2px 15px;
}
.erwa > img {
  width: 100%;
}
.sanwa {
  margin: 15px 0px;
  font-size: 14px;
}
.sanwa > div {
  margin: 5px 0px;
}
.sanwason2 {
  color: red;
}
.siwa {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.liuwa {
  display: flex;
  font-size: 12px;
}
.liuwa > div {
  margin: 0px 10px;
}
.bawa {
  color: red;
}
.wuwa {
  font-size: 16px;
  margin: 8px 10px;
}
.jiuwa {
  position: absolute;
  right: 30px;
  top: 120px;
}
.goumai {
  width: 100%;
  position: absolute;
  bottom: 0px;
}
</style>