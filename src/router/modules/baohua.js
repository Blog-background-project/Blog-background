// import Categorylist from '@/pages/Categorylist'
// import Categorylist from '../../pages/Categorylist'

const Categorylist = () => import('@/pages/Categorylist')
export default [
    {
        // bh--跟团游
        path: "/categorylist",
        component: Categorylist
    },

]
