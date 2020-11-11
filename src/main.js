import Vue from 'vue'
import App from './App.vue'

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor)

Vue.config.productionTip = false

//引入element-ui
import {Button, Select, DatePicker, TimePicker, Switch} from 'element-ui';
//注册element组件
Vue.use(Button)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
import {
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
    Input,
    Popover,
    Popconfirm,
    Breadcrumb,
    BreadcrumbItem,
    Tabs,
    TabPane,
    Dialog,
    Form,
    FormItem
} from 'element-ui';
//注册element组件
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Progress)
Vue.use(Avatar)

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
Vue.use(Popover);
Vue.use(Popconfirm);
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)


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
