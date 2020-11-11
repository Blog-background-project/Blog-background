import Axios from "axios"
import {Message} from "element-ui"

let _Message = Message
console.log(Message)
let instance = Axios.create({
    baseURL: "/api",
    timeout: 20000
})

//请求拦截器
instance.interceptors.request.use((config) => {
    return config
})

//响应拦截器
instance.interceptors.response.use((value) => {
    if (value.data.resultDesc.errCode === 200) return value.data
    else _Message.error(value.data.resultDesc.errMsg)
}, (error) => {
    return Promise.reject(error)
})

export default instance
