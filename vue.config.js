const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境配置
      // ...
    } else {
      // 开发环境配置
      config.devServer
          .port(8008) // 设置开发服务器端口
          .proxy({
            // 配置代理，将请求转发到后端服务
            '/hello': {
              target: 'http://localhost:6001', // 后端服务地址
              changeOrigin: true,
              pathRewrite: {
                '^/hello': '', // 将 /hello 前缀去掉
              },
            },
          });
    }
    return config;
  },
});