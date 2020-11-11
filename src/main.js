import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入element-ui
import {
    Button,
    Select,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tooltip,
    Menu,
    Submenu,
    MenuItem,
    Card,
    Progress,
    Row,
    Col,
    Avatar,
    Pagination,
    TableColumn,
    Table,
    Checkbox,
    Option,
    Input,
} from 'element-ui';
//注册element组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Progress)
Vue.use(Avatar)
Vue.use(Option)

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.use(Checkbox)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Input);

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

new Vue({
    beforeCreate() {
        //全局API
        Vue.prototype.$API = API
        //全局事件总线
        Vue.prototype.$Bus = this
    },
    render: h => h(App),
    router,
    store
}).$mount('#app')
