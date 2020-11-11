import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
import routes from "./modules"

export default new VueRouter({
    mode: "hash",
    routes
})
