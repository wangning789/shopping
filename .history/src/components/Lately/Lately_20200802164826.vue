<template>
 <div>
    <div class="box"><van-icon class="max" @click="click"  name="arrow-left" /></div>
     <div class="box1">我的订单</div>
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
         msg:[],
         arr:[]
     }
   },
   methods: {

   },
   mounted() {

    //    拿到本地最近浏览的数据
    this.msg=JSON.parse(localStorage.getItem("browse"))

    // 去掉重复的内容
    const res = new Map();
    this.arr=this.msg.filter(item=>!res.has(item.id) && res.set(item.id, 1))
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