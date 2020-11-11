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


    /*
     * 获取评论列表功能
     * 请求参数:
    {
        "formSource": "请求来源",
        "pageNo": 1,
        "username": "用户名",
        "artId": 文章id,
        "usertoken": "鉴权token",
        "pageSize": 10
    }
     * */
    reqQryComment(data) {
        return request({
            url: URL + "qryComment",
            method: "POST",
            data
        })
    },

    /*
     * 删除文章接口
     * 请求参数:
    {
      "username": "用户名",
      "artId": 129,//文章id
      "usertoken": "鉴权token"
    }
     * */
    reqDelArticle(data) {
        return request({
            url: URL + "delArticle",
            method: "POST",
            data
        })
    },

    /*
     * 删除评论接口
     * 请求参数:
    {
      "username": "用户名",
      "commId": 129,//评论id
      "usertoken": "鉴权token"
    }
     * */
    reqDelComment(data) {
        return request({
            url: URL + "delComment",
            method: "POST",
            data
        })
    },


    /*
     * 查询用户接口
     * 请求参数:
    {
      "formSource": "android",
      "pageNo": 1,
      "username": "用户名",
      "usertoken": "鉴权token",
      "pageSize": 10
    }
     * */
    reqQryMembers(data) {
        return request({
            url: URL + "qryMembers",
            method: "POST",
            data
        })
    },




    /*
     * 删除用户接口
     * 请求参数:
    {
      "username": "用户名",
      "userinfo": { //用户模块
        "userid": 30  //欲删除的userid
      },
      "formSource": "访问来源",
      "usertoken": "鉴权token"
    }
     * */
    reqDelMember(data) {
        return request({
            url: URL + "delMember",
            method: "POST",
            data
        })
    },

    /*
     * 添加用户接口
     * 请求参数:
    {
      "username": "用户名",
      "userinfo": {
        "userName": "目标用户名",
        "status": 0,  //0 正常，2 审核，3 禁用（管理员可用）
        "level": 5, //用户等级（管理员可用）
        "nickName": "昵称",
        "password": "明文密码",
        "email": "邮箱",
        "homePage": "主页",
        "intro": "个性签名"
      },
      "formSource": "访问来源",
      "usertoken": "鉴权token"
    }
     * */
    reqAddMember(data) {
        return request({
            url: URL + "addMember",
            method: "POST",
            data
        })
    },




    /*
     * 更新用户信息接口
     * 请求参数:
    {
      "username": "用户名",
      "userinfo": {
        "userid":0, //用户id 必填
        <!--以下选填---!>
        "userName": "用户名",//用户等级（管理员可修改）
        "level": 5, //用户等级（管理员可修改）
        "nickName": "昵称",
        "password": "明文密码",
        "email": "邮箱",
        "homePage": "主页",
        "intro": "个性签名"
      },
      "formSource": "访问来源",
      "usertoken": "鉴权token"
    }
     * */
    reqUpdateMember(data) {
        return request({
            url: URL + "updateMember",
            method: "POST",
            data
        })
    },




    /*
     * 查询系统权限列表接口(管理员可用)
     * 请求参数:
    {
      "username": "用户名",
      "formSource": "访问来源",
      "usertoken": "鉴权token"
    }
     * */
    reqQrySystemLevels(data) {
        return request({
            url: URL + "qrySystemLevels",
            method: "POST",
            data
        })
    },







    /*
     * 查询系统插件列表接口(管理员可用)
     * 请求参数:
    {
      "username": "用户名",
      "formSource": "访问来源",
      "usertoken": "鉴权token"
    }
     * */
    reqQryPlugins(data) {
        return request({
            url: URL + "qryPlugins",
            method: "POST",
            data
        })
    },



    /*
     * 更新插件设置接口(管理员可用)
     * 请求参数:
    {
      "username": "用户名",
      "formSource": "访问来源",
      "usertoken": "鉴权token",
      "pluginEnable": false,  //是否开启
      "pluginId": "插件id",
    }
     * */
    reqUpdatePlugin(data) {
        return request({
            url: URL + "updatePlugin",
            method: "POST",
            data
        })
    },



    /*
     * 查询标签接口
     * 请求参数:
    {
      "username": "用户名",
      "usertoken": "鉴权token"
    }
     * */
    reqQryTag(data) {
        return request({
            url: URL + "qryTag",
            method: "POST",
            data
        })
    },


    /*
     * 添加标签接口
     * 请求参数:
    {
      "username": "用户名",
      "name":"标签名称",
      "alias":"标签别称",
      "usertoken": "鉴权token"
    }
     * */
    reqAddTag(data) {
        return request({
            url: URL + "addTag",
            method: "POST",
            data
        })
    },


    /*
     * 删除标签接口(管理员可用)
     * 请求参数:
    {
      "username": "用户名",
      "tagId":29,//标签ID
      "usertoken": "鉴权token"
    }
     * */
    reqdDelTag(data) {
        return request({
            url: URL + "delTag",
            method: "POST",
            data
        })
    },



    /*
     * 查询文章分类接口
     * 请求参数:
    {
        "username": "用户名",
        "formSource": "请求来源",
        "usertoken": "鉴权token"
    }
     * */
    reqQryCategory(data) {
        return request({
            url: URL + "qryCategory",
            method: "POST",
            data
        })
    },



    /*
     * 添加分类接口
     * 请求参数:
    {
      "formSource": "访问源",
      "username": "用户名",
      "usertoken": "鉴权token",
      "cateItem": { //分类item
        "cateID": 0,  //更新分类时必填
        "cateAlias": "别名",
        "cateName": "名称",
        "cateOrder": 1,//排序
        "cateParentID": 2, //父类
        "navMenu": 1 //是否加入导航菜单
      }
    }
     * */
    reqAddCategory(data) {
        return request({
            url: URL + "addCategory",
            method: "POST",
            data
        })
    },

    /*
     * 删除分类接口
     * 请求参数:
    {
      "username": "用户名",
      "cateID": 12, //分类ID
      "formSource": "访问来源",
      "usertoken": "鉴权token"
    }
     * */
    reqDelCategory(data) {
        return request({
            url: URL + "delCategory",
            method: "POST",
            data
        })
    },


    /*
     * 上传图片接口
     * 请求参数:
    {
      "username": "用户名",
      "imgBase64": "图片base64编码",
      "formSource": "访问来源",
      "usertoken": "鉴权token"
    }
     * */
    reqUploadImage(data) {
        return request({
            url: URL + "uploadImage",
            method: "POST",
            data
        })
    },


    /*
     * 检查用户名别名是否存在用户接口
     * 请求参数:
    {
        "targetNickname": "游客昵称",
    }
     * */
    reqCheckNickname(data) {
        return request({
            url: URL + "checkNickname",
            method: "POST",
            data
        })
    },

}
