import aishuaikang from "@/router/modules/aishuaikang";
import huangshaofei from "@/router/modules/huangshaofei";
import baohua from "@/router/modules/baohua"
import suoxiaoyu from "@/router/modules/suoxiaoyu"
import tanzhiguo from "@/router/modules/tanzhiguo"
import lvpengchao from "@/router/modules/lvpengchao"

export default [
<<<<<<< HEAD
    // ...aishuaikang,
    ...tanzhiguo,
    // ...lvpengchao,
    ...suoxiaoyu,
    ...baohua,
    ...huangshaofei,
=======
    ...aishuaikang,
    ...suoxiaoyu,
    ...baohua,
    ...huangshaofei,
    ...tanzhiguo,
    // ...lvpengchao,
>>>>>>> 86810cd321b758f670e1d3a3e2e9c5c898ce3578
    {
        path: "",
        redirect: "/home"
    }
]
