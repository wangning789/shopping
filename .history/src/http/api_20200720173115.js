import service from './index'

export default{
    // 首页
    HomeData(){
        return service.get('/recommend')
    },
    // 搜索框
    SearchData(){
        return service.get('/search')
    },
    // 分类查询
    ClassData(){
        return service.get('/classification?mallSubId=${id}')
    },

    ClassData(){
        return service.get('/getCard')
    },


}