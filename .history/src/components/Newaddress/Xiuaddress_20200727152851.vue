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

</style>
