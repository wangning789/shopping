<template>
 <div>
     <div @click="clickck"><van-icon class="max" name="arrow-left" /></div>
        <div class="box">编辑地址</div>
           <van-address-edit
  :area-list="city"
  show-delete
  show-set-default
  :search-result="searchResult"
  :address-info="arr"
  
  @save="onSave"
  @delete="onDelete"
  
/>
 </div>
</template>

<script>
import city from "../../../area"
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         city,
         arr:{},
          searchResult: []
     }
   },
   methods: {
        onSave(){

        },

        onDelete(){
            this.getData(this.arr._id)
        },
        clickck(){

        },

        // 删除数据
        getData(id){
            this.$api.IncreaseData({id:id}).then(res=>{
                console.log(res)
            }).catch()
        }
   },
   mounted() {
        this.arr=this.$route.query.arr
        console.log(this.arr)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
    display: flex;
    justify-content: center;
    border-bottom:1px solid rgb(238,238,238);
    font-size: 18px;
    padding: 10px 0px;
}
.max{
    position: absolute;
    left: 20px;
    top: 15px;
}
</style>
