import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入element-ui
import '../theme/index.css' //自定义主题
import {Button, Select} from 'element-ui';
//注册element组件
Vue.use(Button)
Vue.use(Select)

//引入路由器
import router from "@/router"
//引入Store
import store from "@/store"


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
