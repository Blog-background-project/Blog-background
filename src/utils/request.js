import Axios from "axios"

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
    return value.data
}, (error) => {
    return Promise.reject(error)
})

export default instance
