import Vue from "vue"
import VueRouter from "vue-router";
Vue.use(VueRouter)
import route from "./modules"

export default new VueRouter({
    mode: "history",
    routes
})
