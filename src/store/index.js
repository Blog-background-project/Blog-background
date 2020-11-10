import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import aishuaikang from "./modules/aishuaikang"
import suoxiaoyu from "./modules/suoxiaoyu";
import tanzhiguo from "./modules/tanzhiguo";
import huangshaofei from "./modules/huangshaofei";
import baohua from "./modules/baohua";
import lvpengchao from "./modules/lvpengchao";

export default new Vuex.Store({
    modules: {
        aishuaikang,
        suoxiaoyu,
        tanzhiguo,
        huangshaofei,
        baohua,
        lvpengchao,
    }
})
