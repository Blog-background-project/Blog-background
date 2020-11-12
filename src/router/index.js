import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
import routes from "./modules"


let router = new VueRouter({
    mode: "hash",
    routes
})

export default router

