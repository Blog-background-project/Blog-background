import Axios from "axios"
import {Message} from "element-ui"

//引入store
import store from "@/store"
//引入router
import router from "@/router"

let _Message = Message
let instance = Axios.create({
    baseURL: "/api",
    timeout: 20000
})

//请求拦截器
instance.interceptors.request.use((config) => {
    //处理登陆后token携带问题
    if (store.state.Login.userInfo.userName) {
        //当用户是登陆状态 则每次发送请求 都携带 username和token
        config.data = {
            username: store.state.Login.userInfo.userName,
            usertoken: store.state.Login.userInfo.token,
            token: store.state.Login.userInfo.token
        }
    }
    return config
})

//响应拦截器
instance.interceptors.response.use((value) => {
    //统一处理响应回来的错误
    if (value.data.resultDesc.errCode === 200) return value.data
    else {
        _Message.error(value.data.resultDesc.errMsg)
        if (value.data.resultDesc.errCode
            === -106) {
            //判断token 如果到期 则清掉本地用户信息
            localStorage.removeItem("OPENUSERINFO_KEY") ? localStorage.removeItem("OPENUSERINFO_KEY") : sessionStorage.removeItem("OPENUSERINFO_KEY")
            router.replace("/login")
        }
    }
}, (error) => {
    return Promise.reject(error)
})
export default instance
