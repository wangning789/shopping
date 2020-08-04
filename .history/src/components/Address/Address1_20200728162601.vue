<template>
  <div>
    <div class="bbgg">
      <div class="box">选择编辑地址</div>
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
      chosenAddressId: "",

      dizhi:"",
     
    
    };
  },
  methods: {
      click(item,index){
          this.dizhi=item
           sessionStorage.setItem("dizhi",JSON.stringify(item))
          sessionStorage.setItem("number",(1))
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