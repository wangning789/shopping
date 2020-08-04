<template>
  <div>
    <div class="box">
      <div>
        <van-cell-group>
          <van-field v-model="value" label="文本" placeholder="请输入用户名" />
        </van-cell-group>
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
      value: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box{
  background-color: gray;
  height: 100%;
  width: 100%;
}
</style>