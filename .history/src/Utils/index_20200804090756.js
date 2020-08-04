import {Dialog} from 'vant'
export default{
checkLogin(){
    if(localStorage.getItem("usa")){

    }else{
        Dialog.alert({
            title:'检测到你没有登陆',
            message:'是否跳转到登陆页面'
        })
    }
}

}