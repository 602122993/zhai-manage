module.exports = {
    proxy: {
      '/system': {
        target: 'http://localhost:8084/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/system': '/'
        }
      }
    }
  }