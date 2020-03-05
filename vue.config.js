
const path = require('path');
// const proxy =  require('./proxyConfig')

module.exports = {
    publicPath:'./',    // 公共路径
    lintOnSave:false,  // 关闭eslint
    productionSourceMap:true,  // 生产环境下css 分离文件
    devServer:{   // 配置服务器
        port:8002,
        open:true,
        https:false,
        overlay: {
            warnings: true,
            errors: true
        },
        // proxy: proxy.proxy
        // proxy: { 
        //     '/api': {
        //         target: 'http://192.168.0.182/api/',
        //         ws: true,
        //         changeOrigin:true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
    },
    configureWebpack:{  // 覆盖webpack默认配置的都在这里
        resolve:{   // 配置解析别名
            alias:{
                '@':path.resolve(__dirname, './src'),
            } 
        }
    },
}