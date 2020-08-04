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

    ClassData(){
        return service.get('//classification?mallSubId=${id}')
    },


}