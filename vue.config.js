const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuePost/' 
    : '/',

  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/main.sass"`,
      },
    },
  },
});
