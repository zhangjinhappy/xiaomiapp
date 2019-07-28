module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "assets",
  filenameHashing: false,

  //如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
   lintOnSave: process.env.NODE_ENV !== 'production',
   runtimeCompiler: false,
   transpileDependencies:[],
  // 不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建,map就是为了方便打印错误位置。
  productionSourceMap: false,

 css:{
   modules:false,
   extract:true,
   sourceMap:false,
   loaderOptions:{
        css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
   },

  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "localhost",
    port: 8081, // 端口号
    https: false, // https:{type:Boolean}
    disableHostCheck: true,
    open: true, //配置自动启动浏览器
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000/api/json",//目标主机
        changeOrigin: true,//需要虚拟主机站点
        pathRewrite: {
          '^/api': ''
        }
      },
      "/api2": {
        target: "<other_url>"
      }
    }
  }
}
