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
    ClassData(id){
        return service.get(`/classification?mallSubId=${id}`)
    },
    // 购物车数据
    ShoppingData(){
        return service.post('/getCard')
    },

    // 5购物车加减商品
    //     count: 购物车数量
    // id: 商品id
    // mallPrice: 价格
    CardData({count,id,mallPrice}){
        return service.post("/editCart",{count,id,mallPrice})
    },

    // 6.购物车商品删除(post)
    // id: 商品id(数组)
    CardData11(id){
        return service.post('/deleteShop',id)
    },

    // 7. 购物车支付页面(post)
    //     address:收货地址
    // tel:电话
    // orderId:所有商品的id(数组)
    // totalPrice:总价格
    // idDirect:用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
    // count:商品数量
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
    oneData(id){
        return service.get(`/goods/one?id=${id}`)
    },

    // 9. 收藏单个商品(post)
    //  商品的详情信息
    // 商品的详情信息(传商品对象)
    paymentData(obj){
        return service.post("/collection",obj)
    },

    // 10. 取消收藏(post)
    // id:商品的id
    CancelData({id}){
        return service.post("/cancelCollection",{id})
    },

    // 11. 查询商品是否已收藏(post)
    // id:商品的id
    SeeData({id}){
        return service.post("/isCollection",{id})
    },

    // 12. 加入购物车(post)
    // id:商品的id
    JoinData({id}){
        return service.post("/addShop",{id})
    },

    // 13. 退出登录(post)
    OutData(){
        return service.post("/loginOut")
    },
    
    // 14. 获取用户信息(post)
    ObtainData(){
        return service.post("/queryUser")
    },

    // 15. 修改保存用户信息(post)
    // gender: 性别
    // year: 年
    // month: 月
    // day: 日
    // id: 用户id
    // nickname: 昵称
    ModifyData({gender,year, month,day,id,nickname}){
        return service.post("/saveUser",{gender,year, month,day,id,nickname})
    },

    // 16. 查询用户订单数量(get)
    SeeoneData(){
        return service.get('/myOrder/orderNum')
    },

    // 17. 商品评论(post)
    //     id: 商品cid
    // rate: 分数
    // content: 内容
    // anonymous: 是否匿名 
    // _id: 商品的_id
    // order_id: 商品的order_id
    // image: []
    CommentData({id,rate,content,anonymous, _id,order_id,image}){
        return service.post("/goodsOne/comment",{id,rate,content,anonymous, _id,order_id,image})
    },

    // 18. 获取登录注册默认验证码(get)
    VerificationData(){
        return service.get('/verify')
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
    // id: 地址id
    SetdefaultData({id}){
        return service.post("/setDefaultAddress",{id})
    },

    // 22. 增加收货地址(post)
    //     name:用户名
    // tel:电话
    // address:(省+市+区+详情地址)
    // isDefault:是否默认
    // province:省
    // city:市
    // county:区
    // addressDetail:详情地址，
    // areaCode:地区代码
    // id:修改地址时候要传id
    Increase({name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id}){
        return service.post("/address",{name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id})
    },

    // 23. 删除地址(post)
    // id:地址_id
    IncreaseData({id}){
        return service.post("/deleteAddress",{id})
    },

    // 24. 查询我的收藏(get)
    DeleteData(){
        return service.get('/collection/list')
    },

    // 25. 注册(post)
    //     nickname: 用户名
    // password:密码
    // verify:验证码
    RegisterData({nickname,password,verify}){
        return service.post("/register",{nickname,password,verify})
    },

    // 26. 登录(post)
    //     nickname: 用户名
    // password:密码
    // verify:验证码
    LoginData({nickname,password,verify}){
        return service.post("/login",{nickname,password,verify})
    },

    // 27. 订单查询(get)
    OrderseeData(){
        return service.get('/myOrder')
    },

    // 28. 查询已评价(get)
    EvaluatedData(){
        return service.get('/alreadyEvaluated')
    },

    // 29. 查询未评价(get)
    NotevaluatedData(){
        return service.get('/tobeEvaluated')
    },

    // 30. 查询单条评论(post)
    // _id:数据库的那条id
    LoginseesData({id,_id,}){
        return service.post("/evaluateOne",{id,_id,})
    },


}