import Ajax from "@/utils/request"
export default {
    // 获取文章所有分类
    getQryCategory() { 
        return Ajax.post('/zb_users/plugin/haloapi/api.php?act=qryCategory',)
    },

    // 查询文章列表接口
    getQryArtivle() {
        return Ajax.post('/zb_users/plugin/haloapi/api.php?act=qryArticle');
    }
    // 删除文章接口

    // 查询文章详情接口
}
