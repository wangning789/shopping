<template>
 <div>
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
         msg:'',
     }
   },
   methods: {

   },
   mounted() {
       this.msg=this.$route.query.msg
       console.log(this.msg)
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
padding: 20px 0px;
}
</style>
