const path = require('path')
const name = process.env.VUE_APP_TITLE

module.exports = {
    publicPath: process.env.ENV === 'production' ? '/' : '/',
    // 目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的目录
    assetsDir: 'static',
    // 是否开启eslint保存检测，有效值：ture | false | 'error'
    lintOnSave: process.env.ENV === 'development',
    // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    productionSourceMap: false,
    /* 
        configureWebpack是调整webpack配置最简单的一种方式，可以新增也可以覆盖cli中的配置。
        可以是一个对象：被 webpack-merge 合并到webpack 的设置中去
        也可以是一个函数：如果你需要基于环境有条件地配置行为，就可以进行一些逻辑处理，可以直接修改或
        新增配置，(该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。
        在函数内，你可以直接修改配置，或者返回一个将会被合并的对象。
    */
    configureWebpack: {
        name,
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src')
            }
        }
    },
    devServer: {
        open: true,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: `http://localhost:8080`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        disableHostCheck: true
    },
    css: {
        loaderOptions: {
            sass: {
                // 向所有 Sass/Less 样式导入共享的全局变量
                // variables.scss不能包含直接编译的css代码，因为全局引入会向每个scss文件添加
                // 由于sass-loader 版本不同，键名也不同
                // sass-loader v8-   --> data
                // sass-loader v8    --> prependData
                // sass-loader v10+  --> additionalData
                prependData: `
                    @import "~@/assets/styles/variables.scss";
                    @import "~@/assets/styles/mixin.scss";
                `
            }
        }
    }
}
