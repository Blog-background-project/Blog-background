import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
import routes from "./modules"

import store from "@/store"


let router = new VueRouter({
    mode: "hash",
    routes
})

router.beforeEach((to, from, next) => {
    let userInfo = store.state.Login.userInfo

    if (userInfo.token) {
        to.path === "/login" ? next("/home") : next()
    } else {
        to.path === "/login" ? next() : next("/login")
    }
})

export default router

