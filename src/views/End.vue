<template>
  <div class="end-page">
    <div class="banner">
      <img :src='`${publicPath}images/banner.png`' alt="">
    </div>
    <div class="information">
      <div class="logo">
        <img :src='`${publicPath}images/store.png`' alt="">
      </div>
      <h2>付款成功</h2>
      <div class="pay-price">您已支付 1,250 元</div>
      <div class="order-information">
        <h4>商店名稱</h4>
        <div class="text">Amazing 3C online Shop</div>
        <h4>訂單編號</h4>
        <div class="text">239234dwnd321</div>
        <h4>支付方式</h4>
        <div class="text">信用卡付款</div>
      </div>
      <div class="return-page">
        畫面將自動轉回<br>
        Amazing 3C Online Shop
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style lang="scss" scoped>
.end-page {
  width: 100%;
  background-color: $second-color;
  .information {
    padding: 50px 115px 105px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .banner {
    width: 100%;
    height: 339px;
    img {
      width: 100%;
      height: 339px;
      object-fit: cover;
    }
  }
  .logo {
    width: 100%;
    text-align: left;
    img {
      width: 270px;
      height: 67px;
    }
  }
  h2 {
    font-size: 2.5rem;
    font-weight: lighter;
    margin: 40px 0 80px;
  }
  .pay-price {
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 40px;
  }
  .order-information {
    h4 {
      font-size: 18px;
      font-weight: normal;
      text-align: center;
      margin-bottom: 16px;
    }
    .text {
      font-size: 24px;
      font-weight: lighter;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .return-page {
    margin-top: 100px;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    line-height: 3;
  }
}
</style>
