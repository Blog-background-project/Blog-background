module.exports = {
    // 关闭ESLint的规则
    lintOnSave: false,
    // 配置代理服务器
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.amspur.com',
                pathRewrite: {"^/api": ""}
            }
        }
    },
}
