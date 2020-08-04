<template>
  <div>
    <div class="box">商品分类</div>
    <div>
      <div class="box2">
        <van-tabs v-model="active"  @click="onClick">
          <van-tab title="新鲜水果"></van-tab>
          <van-tab title="热带水果"></van-tab>
          <van-tab title="苹果/梨"></van-tab>
          <van-tab title="柑橘橙柚"></van-tab>
        </van-tabs>
      </div>

<div >
      <van-sidebar v-model="activeKey">
        <div class="box1" v-for="(item,index) in arr" :key="index">
          <van-sidebar-item title="item.mallCategoryName" />
        </div>
      </van-sidebar>
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
      msg: "",
      activeKey: "",
      active: 0,
      id: "",
      arr:'',
      
     
    };
  },
  methods: {
    getData() {
      this.$api
        .ClassData(this.id)
        .then(res => {
          this.msg = res;
          console.log(res);
        })
        .catch(err =>{
            console.log(err)
        });
    },


       getData1(){
    this.$api.HomeData().then(res=>{
        this.arr=res.data.category
        console.log(this.arr)
    }).catch()
},




     onClick(name, title) {
    //   Toast(title);
      console.log(name)
      console.log(title)
    },
  },

  mounted() {
    this.getData();
    this. getData1()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 2px solid rgb(238, 238, 238);
}
.box1 {
  height: 95vh;
  background-color: rgb(247, 248, 250);
}
.box2 {
  width: 80vw;
  position: absolute;
  right: 0px;
  height: 100px;
}
</style>