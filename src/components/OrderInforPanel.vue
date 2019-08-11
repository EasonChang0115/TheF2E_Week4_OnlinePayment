<template>
  <div class="order-infor-panel">
    <div class="banner">
      <img :src='`${publicPath}images/banner.png`' alt="">
    </div>
    <div class="order-information">
      <h1>訂單資訊</h1>
      <h3>商店名稱</h3>
      <div class="store-name">Amazing 3C online Shop</div>
      <h3>訂單編號</h3>
      <div class="order-number">239234dwnd321</div>
      <h3 class="price-title">本筆訂單將支付</h3>
      <div class="price">1,250<span>元</span></div>
      <h3>支付方式</h3>
      <ul class="payment-style-list">
        <li class="pay-style"
            :class="paymentType === 'credit_card' ? 'active' : ''"
            @click="$emit('onChangePaymentType', 'credit_card')"
        >
            信用卡
        </li>
        <li class="pay-style"
            :class="paymentType === 'online_atm' ? 'active' : ''"
            @click="$emit('onChangePaymentType', 'online_atm')"
        >
            網路ATM<span>(晶片讀卡機轉帳)</span>
        </li>
        <li class="pay-style"
            :class="paymentType === 'local_atm' ? 'active' : ''"
            @click="$emit('onChangePaymentType', 'local_atm')"
        >
            ATM櫃員機<span>(實體ATM及網銀)</span>
        </li>
      </ul>
    </div>
    <PayStylePanelOnPad v-if="innerWidth <= 768"/>
    <div class="store-logo">
      <img :src='`${publicPath}images/store.png`' alt="">
    </div>
  </div>
</template>

<script>
import PayStylePanelOnPad from './PayStylePanelOnPad.vue';
export default {
  props: {
    paymentType: {
      type: String,
      default: 'credit_card'
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
  },
  components: {
    PayStylePanelOnPad
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      innerWidth: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.order-infor-panel {
  width: 100%;
  max-width: 553px;
  background-color: $second-color;
  z-index: 9;
  @include pad-width {
    max-width: initial;
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .order-information {
    width: 100%;
    padding-left: 130px;
    padding-top: 55px;
    padding-bottom: 30px;
    @include pc-width {
      padding-left: px-to-vw(130px, $media-max-size);
    }
    @include pad-width {
      padding: 28px 36px 0px;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: lighter;
      color: black;
      margin-bottom: 25px;
      @include pad-width {
        font-size: 36px;
      }
      @include sphone-width {
        font-size: 28px
      }
    }
    h3 {
      font-size: 18px;
      font-weight: normal;
      margin: 20px 0 16px 0;
      &.price-title {
        margin-top: 52px;
      }
      @include sphone-width {
        font-size: 14px;
      }
    }
    .store-name, .order-number {
      font-size: 24px;
      font-weight: lighter;
      letter-spacing: 2.5px;
      @include sphone-width {
        font-size: 19px;
      }
    }
    .price {
      font-size: 36px;
      text-align: right;
      padding-right: 90px;
      @include pad-width {
        padding-right: 0px;
      }
      @include sphone-width {
        font-size: 29px;
      }
      span {
        font-size: 24px;
        font-weight: lighter;
        margin-left: 24px;
        @include sphone-width {
          font-size: 19px;
        }
      }
    }
    ul.payment-style-list {
      padding: 0;
      margin: 0;
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      @include pad-width {
        display: none;
      }
      li.pay-style {
        width: 360px;
        height: 90px;
        background-color: #F0F0F0;
        font-size: 2rem;
        font-weight: lighter;
        color: #707070;
        padding: 22px 36px;
        margin: 12px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        transition: .3s;
        border-radius: 2px;
        @include pc-width {
          width: initial;
          font-size: px-to-vw(32px, $media-max-size);
          white-space: nowrap;
        }
        @media screen and (max-width: 800px) {
          font-size: 20px;
        }
        &.active {
          width: 100%;
        }
        &:hover, &.active {
          background-color: $primary-color;
          color: white;
          span {
            font-weight: lighter;
          }
        }
        span {
          font-size: 14px;
          font-weight: normal;
          margin-left: 20px;
          top: 6px;
        }
      }
    }
  }
  .store-logo {
    width: 100%;
    padding: 24px 46px;
    img {
      width: 156px;
      height: 38px;
    }
  }
}
</style>
