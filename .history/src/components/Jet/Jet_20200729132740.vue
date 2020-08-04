<template>
  <div>
    <div class="max">
      <van-icon @click="click" name="arrow-left" />
    </div>
    <div class="box">评价中心</div>

    <div class="box1">
      <div class="box2">
        <img :src="msg.image_path" style="width:100%" />
      </div>
      <div class="box3">
        <div>商品评论</div>
        <div>
          <van-rate v-model="value" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
        </div>
      </div>
    </div>

    <div>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="评价"
        type="textarea"
        maxlength="100"
        placeholder="请输入评价"
        show-word-limit
      />
    </div>

    <div class="box4"><van-checkbox v-model="checked" shape="square">匿名评价</van-checkbox></div>

    <div class="box5"><van-button type="primary" size="large" @click="tijiao">提交</van-button></div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      msg: "",
      value: 0,
      message:"",
      checked:false,
      image:[]

    };
  },
  methods: {
      tijiao(){
    let id=this.msg.cid
    let rate=this.value
    let content=this.message
    let anonymous=this.checked
    let _id=this.msg._id
    let order_id=this.msg.order_id
    let image=this.image
    
    this.getData(id,rate,content,anonymous,_id,order_id,image)

    //     id: 商品cid
    // rate: 分数
    // content: 内容
    // anonymous: 是否匿名 
    // _id: 商品的_id
    // order_id: 商品的order_id
     // image: []
      },

    click() {
      this.$router.back();
    },

   getData(id,rate,content,anonymous,_id,order_id,image){
       this.$api.CommentData({id:id,rate:rate,content:content,anonymous:anonymous,_id:_id,order_id:order_id,image:image}).then(res=>{
           if(res.code===200){
               Toast.success('提交成功');
           }else{
               Toast.fail('提交失败');
           }
           console.log(res)
       }).catch()
   }
  },
  mounted() {
    this.msg = this.$route.query.msg;
    console.log(this.msg);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.max {
  position: absolute;
  top: 15px;
  left: 10px;
}
.box1 {
  display: flex;
  height: 150px;
  align-items: center;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.box1 > div {
  margin: 0px 10px;
}
.box2 {
  width: 120px;
}
.box3 > div {
  margin: 20px 0px;
}
.box4{
    margin: 20px 20px;
}
.box5{
    margin: 50px 0px;
}
</style>
