import request from "@/utils/request";

const URL = "/zb_users/plugin/haloapi/api.php?act="
export default {
    /*
    * 查询站点信息接口(管理员可用)
    * 请求参数:
    {
        "username": "用户名",
        "usertoken": "鉴权token",
        "formSource": "访问来源"
    }
    * */
    reqQrySiteInfo(data) {
        return request({
            url: URL + "qrySiteInfo",
            method: "POST",
            data
        })
    },


    /*
    * 更新站点信息接口(管理员可用)
    * 请求参数:
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
    reqUpdateSiteInfo(data) {
        return request({
            url: URL + "updateSiteInfo",
            method: "POST",
            data
        })
    },


    /*
    * 用户登录接口
    * 请求参数:
    {
        "username": "用户名",
        "password": "明文密码(md5加密)",
        "formSource": "请求来源"
    }
    * */
    reqLogin(data) {
        return request({
            url: URL + "login",
            method: "POST",
            data
        })
    },


    /*
    * 退出登录接口(清除token信息)
    * 请求参数:
    {
        "username": "用户名",
        "usertoken": "鉴权token",
        "formSource": "访问来源",
    }
    * */
    reqLoginOut(data) {
        return request({
            url: URL + "loginOut",
            method: "POST",
            data
        })
    },


    /*
    * 查询文章列表接口(根据分类ID)
    * 请求参数:
    {
        "cate": 0,
        "formSource": "android",
        "pageNo": 1,
        "username": "用户名",
        "usertoken": "鉴权token",
        "pageSize": 1
    }
    * */
    reqQryArticle(data) {
        return request({
            url: URL + "qryArticle",
            method: "POST",
            data
        })
    },


    /*
    * 查询文章详情接口
    * 请求参数:
    {
        "username": "用户名",
        "artId": "文章ID",
        "formSource": "请求来源",
        "usertoken": "鉴权token"
    }
    * */
    reqQryArticleDetails(data) {
        return request({
            url: URL + "qryArticleDetails",
            method: "POST",
            data
        })
    },

    /*
     * 查询用户信息接口
     * 请求参数:
    {
        "username": "用户名",
        "targetUserid": 查询的用户id,
        "formSource": "请求来源",
        "usertoken": "鉴权token"
    }
     * */
    reqQryUserInfo(data) {
        return request({
            url: URL + "qryUserInfo",
            method: "POST",
            data
        })
    },

    /*
     * 提交文章接口
     * 请求参数:
    {
      "username": "username",
      "usertoken": "d39eb03dcd8ee769b62f5e105accf75e",
      "articleItem": "{\"cateID\":\"分类id\",\"content\":\"文章内容\",\"isTop\":\"是否置顶\",\"islock\":\"是否草稿\",\"status\":\"文章状态\",\"tag\":\"文章标签\",\"title\":\"文章标题\"}"
    }
     * */
    reqPostArticle(data) {
        return request({
            url: URL + "postArticle",
            method: "POST",
            data
        })
    },

    /*
     * 关键字搜索接口
     * 请求参数:
    {
        "username": "用户名",
        "usertoken": "鉴权token",
        "formSource":"请求来源",
        "keyword": "关键词",
        "pageNo": 1,
        "pageSize": 1
    }
     * */
    reqQrySearch(data) {
        return request({
            url: URL + "qrySearch",
            method: "POST",
            data
        })
    },


    /*
     * 提交评论接口
     * 请求参数:
    {
      "replyid": 0,//回复id，小于1为评论，反之为回复
      "username": "用户名",
      "nickname": "评论者昵称",
      "email": "评论者邮箱",
      "homepage": "评论者主页",
      "content": "回复/评论内容",
      "artId": 0,//文章id
      "usertoken": "鉴权token"
    }
     * */
    reqPostCommet(data) {
        return request({
            url: URL + "postCommet",
            method: "POST",
            data
        })
    },


}
