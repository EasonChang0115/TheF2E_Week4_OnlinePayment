module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TheF2E_Week2_FreeCell/dist/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/all.scss";`
      }
    }
  }
};
