<template>
 <div>
        <div class="box">修改地址</div>
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
         arr:{},
          searchResult: []
     }
   },
   methods: {
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
      let id=this.arr._id
      this.getData(name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id)
      this.$router.go(-1)
      console.log(val)
         },

            // 点击删除
        onDelete(){
            this.getData1(this.arr._id)
            this.$router.push("/Address")
        },
      
        // 删除数据
        getData1(id){
            this.$api.IncreaseData({id:id}).then(res=>{
                console.log(res)
            }).catch()
        },
        // 修改数据
           getData(name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id) {
      this.$api
        .Increase({name:name,tel:tel,address:address,isDefault:isDefault,province:province,city:city,county:county,addressDetail:addressDetail,areaCode:areaCode,id:id})
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
