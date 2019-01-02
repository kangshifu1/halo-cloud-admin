const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'));
        config.module.rule("yml")
            .test(/\.ya?ml$/)
            .use('yaml')
            .loader('@friends-of-js/yaml-loader')
            .options({
                useNodeEnv: true //If true - load only part of yaml file that corresponds to current NODE_ENV
            });
    },
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hot: true,
        hotOnly: false,
        disableHostCheck: true,
        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081/',
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': ""
                }
            }
        }, // string | Object
        before: app => {}
    }
}