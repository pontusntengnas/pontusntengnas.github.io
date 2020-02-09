module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/style/colors.scss";`
        }
      }
    },
    chainWebpack: config => {
      config.module.rule('pdf')
        .test(/\.pdf$/)
        .use('file-loader').loader('file-loader')
    }
  };