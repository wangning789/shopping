<template>
 <div>
        <div @click="clickreturn"><van-icon class="max" name="arrow-left" /></div>
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
          id:""
     }
   },
   methods: {
    //    传参数
        onSave(val) {
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
      this.$router.push('/Address')
      console.log(val)

    },
    onDelete() {
      Toast('delete');
    },
    
    clickreturn(){
         this.$router.go(-1)
    },


    // 新增地址请求
      getData(name,tel,address,isDefault,province,city,county,addressDetail,areaCode) {
      this.$api
        .Increase({name:name,tel:tel,address:address,isDefault:isDefault,province:province,city:city,county:county,addressDetail:addressDetail,areaCode:areaCode})
        .then(res => {
            if(res.code===0){
                Toast(res. msg)
            }else{
                 Toast(res. msg)
            }
            console.log(res)
        })
        .catch();
    },
   },
   mounted() {

      this.$route.query.id
      console.log(this.id)

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