<template>
  <div class="paypage_panel onlineAtm">
    <h1>ATM櫃員機</h1>
    <form action="" class="form" @submit.prevent="submit">
      <h3>敬啟期待</h3>
      <div class="img-box">
        <img :src='`${publicPath}images/paymentshop.svg`' alt="">
      </div>
      <div class="button-group">
        <button class="second">確認付款</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    submit(e) {
      this.$router.push({ path: 'end' });
    }
  }
};
</script>
