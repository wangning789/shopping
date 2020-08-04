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
    // 购物车商品删除(post)
    CardData11({id}){
        return service.post('/deleteShop',{id})
    },
    // 7. 购物车支付页面(post)
    CardpaymentData({address,
        tel,
        orderId,
        totalPrice,
        idDirect,
        count,
        }){
        return service.post('/order',{address,tel,orderId,totalPrice,idDirect, count,})
    },
    // 单个商品详情(get)
    oneData(){
        return service.get('/goods/one?id=${id}')
    },
    // 9. 收藏单个商品(post)
    paymentData({goods}){
        return service.post("/collection",{goods})
    },
    // 10. 取消收藏(post)
    CancelData({id}){
        return service.post("/cancelCollection",{id})
    },
    // 11. 查询商品是否已收藏(post)
    SeeData({id}){
        return service.post("/isCollection",{id})
    },
    // 12. 加入购物车(post)
    JoinData({id}){
        return service.post("/addShop",{id})
    },
    // 13. 退出登录(post)
    OutData({}){
        return service.post("/loginOut",{})
    },
    
    // 14. 获取用户信息(post)
    ObtainData({}){
        return service.post("/queryUser",{})
    },

    // 15. 修改保存用户信息(post)
    ModifyData({gender,year, month,day,id,nickname}){
        return service.post("/saveUser",{gender,year, month,day,id,nickname})
    },

    // 16. 查询用户订单数量(get)
    SeeoneData(){
        return service.get('/myOrder/orderNum')
    },
    // 17. 商品评论(post)
    CommentData({id,rate,content,anonymous, _id,order_id,image}){
        return service.post("/goodsOne/comment",{id,rate,content,anonymous, _id,order_id,image})
    },
    // 18. 获取登录注册默认验证码(get)
    VerificationData(){
        return service.get('/v1/verify')
    },
    // 19. 查询用户收货地址(get)
    UserData(){
        return service.get('/getAddress')
    },
    // 20. 查询默认收货地址(get)
    DefaultData(){
        return service.get('/getDefaultAddress')
    },
    // 21. 设置默认收货地址(post)
    SetdefaultData({id}){
        return service.post("/setDefaultAddress",{id})
    },
    // 22. 增加收货地址(post)
    IncreaseData({name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id}){
        return service.post("/address",{name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id})
    },
    // 23. 删除地址(post)
    IncreaseData({id}){
        return service.post("/deleteAddress",{id})
    },
    // 24. 查询我的收藏(get)
    DeleteData(){
        return service.get('/collection/list')
    },
    // 25. 注册(post)
    IncreaseData({nickname,password,verify}){
        return service.post("/register",{nickname,password,verify})
    },


26. 登录(post)
/login
参数:
nickname: 用户名
password:密码
verify:验证码

27. 订单查询(get)
/getMyOrder

28. 查询已评价(get)
/alreadyEvaluated

29. 查询未评价(get)
/tobeEvaluated

30. 查询单条评论(post)
参数: 
id:商品id
_id:数据库的那条id

}