// import Categorylist from '@/pages/Categorylist'
// import Categorylist from '../../pages/Categorylist'

const Categorylist = () => import('@/pages/Categorylist')
export default [
    {

        path: "/categorylist",
        component: Categorylist
    },

]
