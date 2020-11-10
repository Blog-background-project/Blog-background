# 博客后台项目管理系统开发文档

# 技术栈
- Javascript
- Vue
- Vuex
- Vue-router路由
- Element-ui库
- Vue-cli脚手架
- Webpack打包工具
- Echarts图表UI
- eslint语法检查
- less预编辑处理器


## 登录页

- 用户名效验
  - 用户名为空
  - 用户名太短
  - 用户名英文开头
  - 用户名不存在

- 密码效验
  - 密码为空
  - 密码太短
  - 密码强度太低

- 保持登陆(复选框)
  - 默认当不勾选时登陆后服务端返回的数据需要保存在`LocalStorage`
  - 当勾选时登陆后服务端返回的数据需要保存在`SessionStorage`

## 个人首页

- 账号级别
  - 分为:注册会员\管理员
  - 通过接口返回的level属性进行判断
- 文章数量
  - 通过接口获取文章列表计算出列表的长度
- 评论总数
  - 通过接口获取评论列表计算出列表的长度
- 标签总数
  - 通过接口获取标签列表计算出列表的长度
- 每日更新文章数量图表
  - 通过图表插件渲染图表,根据每日提交文章的数量,前台做记录(可以做假数据)
- 每日评论数量图表
  - 通过图表插件渲染图表,根据每日提交评论的数量,前台做记录(可以做假数据)
- Tab切换展示各个分类的文章
  - 通过接口拿数据

## 新建文章页面

- 文章标题
- 所属分类
- 文章内容
  - 需要用到编辑器插件
- 是否置顶
- 是否草稿
- 文章状态
- 文章标签

## 文章管理(文章增删改)

- 筛选:公开\草稿\审核三个状态
- 时间排序:时间升序\时间倒序
- 评论排序:评论数量升序\评论数量降序
- 分类筛选文章

