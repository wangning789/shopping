<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <div class="box3">登陆/注册</div>
          <!-- 输入账号和密码 -->
          <van-form @submit="onSubmit">
            <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />

            <!-- 手机号和验证码 -->
         <div class="box5">
              <van-field v-model="tel" type="tel" label="手机号" placeholder="仅注册需要" />
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="仅注册需要">
              <template #button>
                <div v-if="num===-1">
                  <van-button size="small" type="primary" @click="clickopen">发送验证码</van-button>
                </div>
                <div v-if="num===1">
                  <van-count-down :time="time" @finish="finish" />
                </div>
              </template>
            </van-field>
            <div class="box6">
              <van-field v-model="Verification" label="验证码" placeholder="验证码">
                <template #button>
                  <div v-html="msg" @click="getData1"></div>
                </template>
              </van-field>
            </div>
         </div>

            <!-- 登陆和注册 -->
            <div style="margin: 16px;" class="box4">
              <van-button type="info" native-type="submit">登陆</van-button>
              <van-button type="danger" native-type="submit">注册</van-button>
            </div>
          </van-form>
        </div>
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
      username: "",
      password: "",
      tel: "",
      sms: "",
      time: 5000,
      num: -1,
      Verification: "",
      msg: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    clickopen() {
      this.num = 1;
    },
    finish() {
      this.num = -1;
    },

    getData() {
      this.$api
        .LoginData({
          nickname: this.username,
          password: this.password,
          verify: this.Verification
        })
        .then(res => {
          if(res.code===-1){

          }
          console.log(res);
        })
        .catch();
    },
    getData1() {
      this.$api
        .VerificationData()
        .then(res => {
          this.msg = res;
        })
        .catch();
    }
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  background-color: gray;
  height: 100vh;
  width: 100vw;
}
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.box2 {
  width: 90vw;
  background-color: white;
}
.box3 {
  margin: 10px 10px;
  margin-bottom: 30px;
}
.box4 > button {
  margin: 0px 5px;
  width: 100px;
}
.box6 {
  display: flex;
}
.box5{
  margin-top:30px;
}
</style>