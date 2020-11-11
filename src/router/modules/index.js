import aishuaikang from "@/router/modules/aishuaikang";
import huangshaofei from "@/router/modules/huangshaofei";
import baohua from "@/router/modules/baohua"
import suoxiaoyu from "@/router/modules/suoxiaoyu"
import tanzhiguo from "@/router/modules/tanzhiguo"
import lvpengchao from "@/router/modules/lvpengchao"

export default [
    ...aishuaikang,
    ...suoxiaoyu,
    ...baohua,
    ...huangshaofei,
    // ...tanzhiguo,
     ...lvpengchao,
    {
        path: "",
        redirect: "/home"
    }

]
