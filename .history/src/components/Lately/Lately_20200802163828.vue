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
    this.msg=JSON.parse(localStorage.getItem("browse"))

  const res = new Map();
    let arr=this.msg.filter(item=>!res.has(item.id) && res.set(item.id, 1))
    // arr.map(item=>{
    //     this.msg.push(JSON.parse(item))
    // })
    console.log(this.msg)
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