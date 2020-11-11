import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import Home from "@/store/modules/Home";
import FileManagement from '@/store/modules/FileManagement'
import Categorylist from "@/store/modules/Categorylist"

export default new Vuex.Store({
    modules: {
        Home,
        FileManagement,
        Categorylist
    }
})
