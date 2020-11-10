import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入element-ui
import '../theme/index.css' //自定义主题
import {
    Button,
    Select,
    Card,
    Progress,
    Row,
    Col,
    Avatar
} from 'element-ui';
//注册element组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Progress)
Vue.use(Avatar)

//引入路由器
import router from "@/router"
//引入Store
import store from "@/store"
//引入全局API
import API from "@/api"

new Vue({
    beforeCreate() {
        Vue.prototype.$API = API
    },
    render: h => h(App),
    router,
    store
}).$mount('#app')