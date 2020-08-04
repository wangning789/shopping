import service from './index'

export default{
    // 首页
    HomeData(){
        return service.get('/recommend')
    },
    // 搜索框
    SearchData({value}){
        return service.post('/search',{value})
    },
    // 分类查询
    ClassData(){
        return service.get('/classification?mallSubId=${id}')
    },
    // 购物车数据
    ShoppingData(){
        return service.get('/getCard')
    },
    // 购物车加减商品
    CardData({count,id,mallPrice}){
        return service.post("/editCart",{count,id,mallPrice})
    },

}