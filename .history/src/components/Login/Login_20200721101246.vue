<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <div class="box3">登陆/注册</div>
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
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">提交</van-button>
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
      password:""
    };
  },
  methods: {
      onSubmit(values) {
      console.log( values);
    },
  },
  mounted() {},
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
}
.box2 {
  width: 90vw;
  background-color: white;
}
.box3 {
  margin: 10px 10px;
  margin-bottom: 30px;
}
</style>