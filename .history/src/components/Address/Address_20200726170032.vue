<template>
 <div>
     <div class="from"><van-icon name="arrow-left" /></div>
     <div class="box">编辑地址</div>
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

     }
   },
   methods: {

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
        padding: 15px 0px;
        border-bottom:1px solid rgb(238,238,238);
    }
    .from{
        position: absolute;
        left: 15px;
        top: 20px;
    }
</style>