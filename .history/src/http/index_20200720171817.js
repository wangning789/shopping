import axios from 'axios'
const service =axios.create({
    baseURL:"/api",
    timeout:5000
})


service.interceptors.response.use((res)=>{
    return res.data
},err=>{
    console.log(err)
})