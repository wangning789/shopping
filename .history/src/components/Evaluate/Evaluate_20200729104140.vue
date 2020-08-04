<template>
  <div>
    <div class="max">
        <div class="box">
      <van-icon class="max" @click="click" name="arrow-left" />
    </div>
    <div class="box1">评论中心</div>
    <div class="box2">
      <img src="../../../evaluate.jpg" style="width:100%" />
    </div>
    
    </div>

    <div>
      <van-tabs v-model="active">
        <van-tab title="未评论">
         <div v-for="(item,index) in msg" :key="index">
              <van-card
            :title="item.name"
            :thumb="item.image_path"
          >
            <template #footer>
              <van-button size="small" type="warning">评价晒图</van-button>
            </template>
          </van-card>
         </div>
          
        </van-tab>
        <van-tab title="已评论"></van-tab>
      </van-tabs>
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
      active: "",

      msg: ""
    };
  },
  methods: {
    click() {
      this.$router.back();
    },

    getData11() {
      this.$api
        .NotevaluatedData()
        .then(res => {
          this.msg = res.data.list;
          console.log(this.msg);
        })
        .catch();
    }
  },
  mounted() {
    this.getData11();
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
  height: 200px;
}
.boxbox{
    height: 220px;
    width: 100%;
}
</style>