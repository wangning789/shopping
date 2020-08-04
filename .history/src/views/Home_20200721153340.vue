<template>
 <div>
   <Hometop></Hometop>
 </div>
</template>

<script>
import axios from "axios"
import Hometop from"../components/Hometop/Hometop"
 export default {
   name: '',
   props: {
   
   },
   components: {
       Hometop,
   },
   data () {
     return {
        msg:'',
        city:''
     }
   },
   methods: {
    getData(){
    this.$api.HomeData().then(res=>{
      this.msg=res
      console.log(res)
    }).catch()
}
   },
   mounted() {
    //  this.getData()
   

       let _this=this
    AMap.plugin('AMap.Geolocation', function() {
  var geolocation = new AMap.Geolocation({
    // 是否使用高精度定位，默认：true
    enableHighAccuracy: true,
    // 设置定位超时时间，默认：无穷大
    timeout: 10000,
    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    buttonOffset: new AMap.Pixel(10, 20),
    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    zoomToAccuracy: true,     
    //  定位按钮的排放位置,  RB表示右下
    buttonPosition: 'RB'
  })

  geolocation.getCurrentPosition()
  AMap.event.addListener(geolocation, 'complete', onComplete)
  AMap.event.addListener(geolocation, 'error', onError)

  function onComplete (data) {
      console.log(data)
    // data是具体的定位信息
  }

  function onError (data) {
    // 定位出错
  }
})
   },
   watch: {

   },
   computed: {
  
   }
 }
</script>

<style scoped lang='scss'>

</style>