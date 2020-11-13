import Vue from 'vue'
import App from './App.vue'
import md5 from 'js-md5'

import VueQuillEditor from 'vue-quill-editor'
import elTableInfiniteScroll from 'el-table-infinite-scroll';

Vue.use(elTableInfiniteScroll);
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor)

Vue.config.productionTip = false



//注册element组件
import {
    Loading,
    Button,
    Select,
    DatePicker,
    TimePicker,
    Switch,
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
    Form,
    FormItem,
    CheckboxGroup,
    CheckboxButton,
    Popover,
    Popconfirm,
    Breadcrumb,
    BreadcrumbItem,
    Tabs,
    TabPane,
    Dialog,
    Message,
    Upload,
    MessageBox,
    InfiniteScroll,

} from 'element-ui';

//注册element组件
Vue.use(Loading)
Vue.use(Button)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(Card)
Vue.use(Upload)
Vue.use(Row)
Vue.use(Col)
Vue.use(Progress)
Vue.use(Avatar)
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(CheckboxGroup);
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(CheckboxButton);
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
Vue.use(Button)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)

Vue.use(Option);
Vue.use(InfiniteScroll);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

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
        // 全局md5加密
        Vue.prototype.$md5 = md5;
        //message框
        Vue.prototype.$message = Message;
    },
    render: h => h(App),
    router,
    store
}).$mount('#app')