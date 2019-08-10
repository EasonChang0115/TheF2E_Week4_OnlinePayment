<template>
  <div class="home-page">
    <OrderInforPanel :paymentType="paymentType" @onChangePaymentType="changePaymentType"/>
    <div class="payment_panel">
      <keep-alive>
        <component :is="paymentTypeName[paymentType]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import OrderInforPanel from '@/components/OrderInforPanel.vue';
import CreditCardPaymentPanel from '@/components/CreditCardPaymentPanel.vue';
import OnlineAtmPaymentPanel from '@/components/OnlineAtmPaymentPanel.vue';
import LocalAtmPaymentPanel from '@/components/LocalAtmPaymentPanel.vue';

export default {
  data() {
    return {
      paymentType: 'credit_card', // credit_card, online_atm, local_atm
      paymentTypeName: {
        credit_card: CreditCardPaymentPanel,
        online_atm: OnlineAtmPaymentPanel,
        local_atm: LocalAtmPaymentPanel
      }
    };
  },
  components: {
    OrderInforPanel,
    CreditCardPaymentPanel,
    OnlineAtmPaymentPanel,
    LocalAtmPaymentPanel
  },
  methods: {
    changePaymentType(type) {
      this.paymentType = type;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  background-color: $primary-color;
  display: flex;
  .payment_panel {
    width: 100%;
    padding-top: 240px;
    padding-bottom: 160px;
    padding-left: 85px;
    padding-right: 105px;
  }
}
</style>
