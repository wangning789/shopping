<template>
  <div>
    <div class="box">商品分类</div>
    <div>
      <div class="box2">
        <van-tabs v-model="active" v-if='arr'>
          <div v-for="(item,index) in arr[activeKey*1].bxMallSubDto" :key="index">
            <van-tab :title="item.mallSubName"></van-tab>
          </div>
        
        </van-tabs>
      </div>

    <div>
      <van-sidebar v-model="activeKey" >
        <div  v-for="(item,index) in arr" :key="index" >
          <van-sidebar-item :title="item.mallCategoryName" @click="getData(item,index)" />
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
    getData(item,index) {
       this.id=this.arr[index].bxMallSubDto[0].mallSubId
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


    // clickid(item,index){
    //   this.id=this.arr[index].bxMallSubDto[0].mallSubId
    //   console.log(index)
    // }

    
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

.box2 {
  width: 80vw;
  position: absolute;
  right: 0px;
  height: 100px;
}
</style>