import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入element-ui
import '../theme/index.css' //自定义主题
<<<<<<< HEAD
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
=======
import {Button, Select, Dropdown, DropdownMenu, DropdownItem, Tooltip, Menu, Submenu, MenuItem} from 'element-ui';
//注册element组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
>>>>>>> 60c170bf9af799e5c079fbbe9b3063bf48357d43

//引入路由器
import router from "@/router"
//引入Store
import store from "@/store"
//引入全局API
import API from "@/api"

//定义全局组件
import Header from "@/components/Header"

Vue.component("Header", Header)
import Navigation from "@/components/Navigation"

Vue.component("Navigation", Navigation)
console.log(API)
new Vue({
    beforeCreate() {
        Vue.prototype.$API = API
        Vue.prototype.$Bus = this
    },
    render: h => h(App),
    router,
    store
}).$mount('#app')