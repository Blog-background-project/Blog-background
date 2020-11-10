import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由器
import router from "@/router"
//引入Store
import store from "@/store"

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
