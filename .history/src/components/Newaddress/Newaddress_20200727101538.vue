<template>
 <div>
        <div><van-icon class="max" name="arrow-left" /></div>
        <div class="box">编辑地址</div>

        <van-address-edit
  :area-list="city"
  show-delete
  show-set-default
  :search-result="searchResult"
  
  @save="onSave"
  @delete="onDelete"
  
/>
 </div>
</template>

<script>
import city from "../../../area"
import { Toast } from 'vant';
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         city,
          searchResult: [],
     }
   },
   methods: {
        onSave(val) {
      Toast('save');
      console.log(val)
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
    
        this.searchResult = [];
      
    },

   },
   mounted() {

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