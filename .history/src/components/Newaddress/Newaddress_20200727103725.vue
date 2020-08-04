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
      let name=val.name
      let tel=val.tel
      let address=val.province+val.city+val.county
      let isDefault=val.isDefault
      let province=val.province
      let city=val.city
      let county=val.county
      let addressDetail=val.addressDetail
      let areaCode=val.areaCode
      this.getData(name,tel,address,isDefault,province,city,county,addressDetail,areaCode)
      console.log(val)

    },
    onDelete() {
      Toast('delete');
    },
    



    // 新增地址请求
      getData(name,tel,address,isDefault,province,city,county,addressDetail,areaCode) {
      this.$api
        .Increase({name:name,tel:tel,address:address,isDefault:isDefault,province:province,city:city,county:county,addressDetail:addressDetail,areaCode:areaCode})
        .then(res => {
        })
        .catch();
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