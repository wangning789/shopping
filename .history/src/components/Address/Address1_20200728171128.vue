<template>
  <div>
    <div class="bbgg">
      <div class="from" @click="fanhui">
        <van-icon name="arrow-left" />
      </div>
      <div class="box">编辑地址</div>
    </div>
    <div class="bigg"></div>
    <div class="box1" v-if="msg.length===0">暂无收获地址</div>

    <van-address-list
      v-model="chosenAddressId"
      :list="this.msg"
      default-tag-text="默认"
     @select="click"
      @edit="onEdit"
      @add="onAdd"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      msg: [],
      chosenAddressId: "1",

      dizhi:"",
     
    
    };
  },
  methods: {
    //   设置默认地址
    getData11(id){
        this.$api.SetdefaultData({id:id}).then(res=>{

        }).catch();
    },
      click(item,index){
       let id=item._id
       this.getData(id)
       console.log(item) 
      },
      fanhui(){
          this.$router.push("/Settlement")
      },
   
    onEdit(item, index) {
       
        
       this.$router.push({
          path: '/xiuaddress',
          query: {
            arr: item
          }
        })
    },

    onAdd() {
         this.$router.push("/Newaddress");
     
    }
  },
  mounted() {
   
    //   获取数据
      this.$api
        .UserData()
        .then(res => {
          this.msg = res.address;

         this.msg.map((item,index)=>{
              if(item.isDefault===true){
                   this.msg.splice(index,1)
                   this.msg.unshift(item)
               }
         })
        //   添加Id
           this.msg.map((item,index)=>{
               this.$set(item,"id",String(index+1));
          });
        
    
          console.log(this.msg);
        })
        .catch();

         
         
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  background-color: white;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.from {
  position: absolute;
  left: 15px;
  top: 20px;
}
.box1 {
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: 30px 0px;
  color: rgb(100, 100, 100);
}
.anniu {
  position: absolute;
  bottom: 0px;
}
.bbgg {
  position: fixed;
  z-index: 15;
}
.bigg {
  height: 40px;
}
</style>