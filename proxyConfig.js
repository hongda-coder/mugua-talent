// //项目域名地址
// const testurl = 'http://192.168.0.182/api/' // 请求基本路径
// const localurl = 'http://192.168.0.182/api/'//后端本地地址
// let ROOT,ROOT1;
// let PROXYROOT;//代理指向地址
// //由于封装的axios请求中，会将ROOT打包进去，为了方便之后不再更改，判断了当前环境，而生成的不同的ROOT
// if (process.env.NODE_ENV === 'development') {
//     //开发环境下的代理地址，解决本地跨域跨域
//     ROOT = "/api" //公告接口
//     ROOT1 = "/newsflashview" //快讯接口
//     PROXYROOT = testurl
// } else{
//     //生产环境下的地址
//     ROOT = testurl;
//     PROXYROOT = testurl 
// }
 
// module.exports = {
//     proxy : {
//         [ROOT]: {    
//             target: PROXYROOT,  // 接口域名
//             ws: true,
//             changeOrigin: true 
//         },
//         [ROOT1]: {    //将www.exaple.com印射为ROOT1 即/newsflashview
//             target: PROXYROOT,  // 接口域名
//             ws: true,
//             changeOrigin: true 
//         }
//     },
// }