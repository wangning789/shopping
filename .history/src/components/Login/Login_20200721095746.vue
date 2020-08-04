<template>
  <div>
    <div class="box">
      <div class="box1">
       <div>
          <van-cell-group>
          <van-field v-model="value" label="文本" placeholder="请输入用户名" />
        </van-cell-group>
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
  height: 100vh;
  width: 100vw;
  
}
.box1{
  width: 90vw;
  background-color: white;
   display: flex;
  justify-content: center;
 
}
</style>