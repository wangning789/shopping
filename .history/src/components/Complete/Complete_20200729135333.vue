<template>
 <div>
     <div class="max">
      <van-icon @click="click" name="arrow-left" />
    </div>
    <div class="box">评价中心</div>
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
         arr:''
     }
   },
   methods: {

   },
   mounted() {
       this.arr=this.$route.query.arr;
       console.log(this.arr)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
</style>