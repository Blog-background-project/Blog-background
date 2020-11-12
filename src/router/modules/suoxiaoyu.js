import Home from '@/pages/Home'

export default [
    {
        path: "/home",
        component: Home,
        // beforeEach: (to, from, next) => {
        //     if (to.path === '/login') {
        //         next()
        //         var tokenStr = sessionStorage.getItem('OPENTOKEN_KEY') || localStorage.getItem("OPENTOKEN_KEY")
        //     }
        //     if (!tokenStr) {
        //         console.log("yunxingle1")
        //
        //         next()
        //     } else {
        //         console.log("yunxingle")
        //         next('/login')
        //     }
        // }

    }
]
