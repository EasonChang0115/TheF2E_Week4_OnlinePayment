const baseUrl = process.env.NODE_ENV === 'production' ? '/TheF2E_Week4_OnlinePayment/dist/' : '/';
module.exports = {
  publicPath: baseUrl
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/all.scss";`
      }
    }
  }
};
