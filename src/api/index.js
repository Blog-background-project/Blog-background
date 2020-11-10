import request from "@/utils/request";

export default {
    /*
    * 查询站点信息接口(管理员可用)
    * @username:登陆账号;
    * @usertoken:登陆后的token
    * */
    reqQrySiteInfo(username, usertoken) {
        return request({
            url: "qrySiteInfo",
            method: "POST",
            data: {
                username,
                usertoken,
                formSource: "web"
            }
        })
    },
    /*
    * 查询站点信息接口(管理员可用)
    * @username:登陆账号;
    * @usertoken:登陆后的token
    * */
    updateSiteInfo(username, usertoken) {
        return request({
            url: "qrySiteInfo",
            method: "POST",
            data: {
                username,
                usertoken,
                formSource: "web"
            }
        })
    },

    /*
{
    "username": "用户名",
    "usertoken": "鉴权token",
    "formSource": "访问来源",
    --- 可选一---
    "webTitle": "站点标题",
    "webSubTitle": "站点子标题",
    "webCopyright": "站点版权信息",
    "webDevMode": "站点开发者模式是否开启",
    "webGzipEable": "站点Gzip模式是否开启",
    "webClose": "是否关闭站点",
    "webDisplayCount": "首页文章展示条数",
    "webDisplaySubCategprys": "是否展示耳机分类",
    "webPageCount": "页码展示数",
    "webSearchCount": "搜索返回条数",
    "webManagerCount": "",
    "webCommentEnable": "是否开启评论",
    "webCommentAudit": "是否开启审核",
    "webCommentReverseOrder": "评论是否逆序",
    "webCommentDisplayCount": "评论展示条数",
    "webCommentVerify": "是否开启评论验证"
}



    * */
    
    /*
    * 获取文章所有分类
    * "username": "用户名",
    * "formSource": "请求来源",
    * "usertoken": "鉴权token"
    * */
    //    qryCategory
    getQryCategory(username, usertoken) {
        return request({
            url: "qryCategory",
            method: "POST",
            data: {
                username,
                usertoken,
                formSource: "web"
            }
        })
    }
}
