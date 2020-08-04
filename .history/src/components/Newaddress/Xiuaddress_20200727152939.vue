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
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         arr:'',
     }
   },
   methods: {
        onSave(){

        },

        onDelete(){
            
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
