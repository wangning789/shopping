import service from './index'

export default{
    HomeData(){
        return service.get('/recommend')
    }
}