import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入element-ui
import '../theme/index.css' //自定义主题
import { Button, Select, Card, Table, TableColumn, Pagination, Radio, Checkbox, Input} from 'element-ui';
//注册element组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Input);

//引入路由器
import router from "@/router"
//引入Store
import store from "@/store"
//引入全局API
import API from "@/api"
console.log(router)
new Vue({
    beforeCreate() {
        Vue.prototype.$API = API
    },
    render: h => h(App),
    router,
    store
}).$mount('#app')
