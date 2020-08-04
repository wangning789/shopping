<template>
 <div>
{{name}}
 </div>
</template>

<script>
import axios from "axios"
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        mag:""
     }
   },
   methods: {
getData(){
    this.$api.HomeData().then(res=>{
      console.log(res)
    }).catch()
}
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {
     name(){
      return this.$store.state.name
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>