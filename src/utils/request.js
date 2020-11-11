import Axios from "axios"
import {Message} from "element-ui"

//引入store
import store from "@/store"

let _Message = Message
let instance = Axios.create({
    baseURL: "/api",
    timeout: 20000
})

//请求拦截器
instance.interceptors.request.use((config) => {
    //处理登陆后token携带问题
    if (store.state.Login.token) {
        config.data.username = store.state.Login.username
        config.data.token = store.state.Login.token
        config.data.usertoken = store.state.Login.token
    }
    return config
})

//响应拦截器
instance.interceptors.response.use((value) => {
    //统一处理响应回来的错误
    if (value.data.resultDesc.errCode === 200) return value.data
    else _Message.error(value.data.resultDesc.errMsg)
}, (error) => {
    return Promise.reject(error)
})

export default instance
