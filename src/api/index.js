
import aishuaikang from "@/api/modules/aishuaikang";
import huangshaofei from "@/api/modules/huangshaofei";
import tanzhiguo from "@/api/modules/tanzhiguo";
import baohua from "@/api/modules/baohuan"
import lvpengchao from "@/api/modules/lvpengchao";
import suoxiaoyu from "@/api/modules/suoxiaoyu";

export default {
    ...aishuaikang,
    ...huangshaofei,
    ...tanzhiguo,
    ...baohua,
    ...lvpengchao,
    ...suoxiaoyu,
}
