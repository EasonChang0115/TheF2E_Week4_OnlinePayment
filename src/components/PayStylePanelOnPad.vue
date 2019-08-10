<template>
  <ul class="payment-style-list-pad">
    <li class="pay-style"
      :class="payType === 'credit_card' ? 'active' : ''"
    >
      <div class="title" @click="payType = 'credit_card'">信用卡<span class="close" @click.stop="payType = ''"></span></div>
      <div class="clild-block">
        <CreditCardPaymentPanel />
      </div>
    </li>
    <li class="pay-style"
      :class="payType === 'online_atm' ? 'active' : ''"
    >
      <div class="title" @click="payType = 'online_atm'">網路ATM<span>(晶片讀卡機轉帳)</span><span class="close" @click.stop="payType = ''"></span></div>
      <div class="clild-block">
        <OnlineAtmPaymentPanel />
      </div>
    </li>
    <li class="pay-style"
      :class="payType === 'local_atm' ? 'active' : ''"
    >
      <div class="title" @click="payType = 'local_atm'">ATM櫃員機<span>(實體ATM及網銀)</span><span class="close" @click.stop="payType = ''"></span></div>
      <div class="clild-block">
        <LocalAtmPaymentPanel />
      </div>
    </li>
  </ul>
</template>

<script>
import CreditCardPaymentPanel from './CreditCardPaymentPanel.vue';
import OnlineAtmPaymentPanel from './OnlineAtmPaymentPanel.vue';
import LocalAtmPaymentPanel from './LocalAtmPaymentPanel.vue';

export default {
  data() {
    return {
      payType: ''
    };
  },
  components: {
    CreditCardPaymentPanel,
    OnlineAtmPaymentPanel,
    LocalAtmPaymentPanel
  }
};
</script>

<style lang="scss" scoped>
ul.payment-style-list-pad {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  display: none;
  flex-direction: column;
  margin-bottom: 75px;
  @include pad-width {
    display: flex;
  }
  li.pay-style {
    width: 100%;
    background-color: #F0F0F0;
    font-size: 28px;
    font-weight: lighter;
    color: #343434;
    padding: 22px 36px;
    margin: 12px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: .3s;
    border-radius: 2px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      text-align: center;
      position: relative;
      .close {
        width: 14px;
        height: 14px;
        overflow: hidden;
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
        display: none;
        &:hover {
          &::before, &::after {
            background-color: white;
          }
        }
        &::before, &::after {
          display: block;
          content: '';
          width: 100%;
          height: 2px;
          background-color: #707070;
          position: absolute;
          top: 50%;
          transform-origin: center;
          transition: .3s;
        }
        &::before {
          transform-origin: center;
          transform: translateY(-50%) rotate(45deg);
        }
        &::after {
          transform-origin: center;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
      @include phone-width {
        padding: 0 15px;
      }
    }
    @include phone-width {
      padding: 12px 0px;
    }
    &.active {
      width: 100%;
      padding: 22px 15px;
      .title {
        text-align: left;
        margin-top: 15px;
        margin-bottom: 25px;
        padding: 0 15px;
        .close {
          display: inline-block;
        }
      }
      .clild-block {
        height: initial;
      }
    }
    &:hover, &.active {
      background-color: $primary-color;
      color: white;
      span {
        font-weight: lighter;
      }
    }
    .clild-block {
      transition: .3s;
      background-color: $primary-color;
      height: 0;
      width: 100%;
      overflow: hidden;
      padding: 0 15px;
    }
    span {
      font-size: 14px;
      font-weight: normal;
      margin-left: 20px;
      top: 6px;
    }
  }
}
</style>
