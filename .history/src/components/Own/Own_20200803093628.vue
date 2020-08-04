<template>
  <div>
    <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">个人信息</div>
    <div class="box2">
      <div class="box3">
        <div>头像</div>
        <div class="box4">
          <img :src="this.msg.avatar" class="box4" />
        </div>
      </div>
    </div>

    <div>
      <van-cell-group>
        <van-field v-model="value1" label="用户名" placeholder="请输入用户名" disabled />
        <van-field v-model="value2" label="昵称" required placeholder="请输入昵称" />
        <van-field v-model="value3" label="性别" required placeholder="请输入性别" />
        <van-field v-model="value4" label="邮箱" placeholder="请输入邮箱" />
        <van-field v-model="value5" label="生日" placeholder="请输入生日" />
      </van-cell-group>
    </div>
    <div><van-cell is-link @click="showPopup">选择生日</van-cell></div>
    <div><van-popup v-model="show" position="bottom" :style="{ height: '30%' }">  <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
        @cancel="cancel"
        :formatter="formatter"
    /></van-popup></div>
    <!-- <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
    /> -->

    <div class="box6">
      <van-button type="primary" size="large" @click="clickcbb">保存</van-button>
      <van-button size="large" @click="click">取消</van-button>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      msg: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5:'',
      currentDate:'',
      show:false,

      year:'',
      moath:'',
      day:'',

       minDate: new Date(1930, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
      formatter(type, val) {
      if (type === 'year') {
        return val + '年';
      }
      if (type === 'month') {
        return val + '月';
      }
      if (type === 'day') {
        return val + '日';
      }
      return val;
    },


      confirm(value){
          this.show=false
          this.year=dayjs(value).format("YYYY")
          this.moath=dayjs(value).format("MM")
          this.day=dayjs(value).format("DD")
          this.value5=this.year+"年"+this.moath+"月"+this.day+"日"
          console.log(this.day)
      },

    cancel(){
        this.show=false
    },       

       showPopup() {
      this.show = true;
    },
    clickcbb() {
      // let now =this.value5;
      //   let day = now.getDate()

      console.log(this.value5);
    },

    click() {
      this.$router.back();
    }
  },
  mounted() {
    this.$api
      .ObtainData()
      .then(res => {
        this.msg = res.userInfo;
        this.value1 = this.msg.nickname;
        this.value2 = this.msg.username;
        this.value3 = this.msg.gender;
        let arr =
          this.msg.year + "年" + this.msg.month + "月" + this.msg.day + "日";

        console.log(this.msg);
      })
      .catch();
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
.box2 {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.box3 {
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
}
.box4 {
  width: 50px;
}
.box6 {
  margin: 60px 0px;
}
</style>
