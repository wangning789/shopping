<template>
 <div>

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
         msg:[]
     }
   },
   methods: {

   },
   mounted() {

    //    拿到本地最近浏览的数据
    let arr= JSON.parse(localStorage.getItem("browse"))
    arr.map(item=>{
        this.msg.push(JSON.parse(item))
    })
    console.log(arr)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>