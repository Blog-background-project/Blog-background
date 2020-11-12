import Vue from "vue"
import VueRouter from "vue-router";

Vue.use(VueRouter)
import routes from "./modules"


let router = new VueRouter({
    mode: "hash",
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
        var tokenStr = sessionStorage.getItem('OPENTOKEN_KEY') || localStorage.getItem("OPENTOKEN_KEY")
    }
    if (!tokenStr) {
        console.log("yunxingle1")

        next()
    } else {
        console.log("yunxingle")
        next('/login')
    }
})

export default router

