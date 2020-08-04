import {Dialog} from 'vant'
export default{
checkLogin(next){
    if(localStorage.getItem("usa")){
        next()
    }else{
        Dialog.alert({
            title:'检测到你没有登陆',
            message:'是否跳转到登陆页面'
        })
    }
},
checkLogin1(item,next){
    if(localStorage.getItem("usa")){
        next(item)
    }else{
        Dialog.alert({
            title:'检测到你没有登陆',
            message:'是否跳转到登陆页面'
        })
    }
},
}