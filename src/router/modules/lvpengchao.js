import Login from '@/pages/Login'
export default [
    {
        path:'/login',
        component:Login,
        beforeEnter: (to, from, next) => {
            if (from.path === '/login') {
                next()
                var tokenStr = sessionStorage.getItem('OPENTOKEN_KEY') || localStorage.getItem("OPENTOKEN_KEY")
                console.log(tokenStr)
            }
            if (!tokenStr) {
                console.log("yunxingle1")
            } else {
                console.log("yunxingle")
                next('/login')
            }
        }
    }
]
