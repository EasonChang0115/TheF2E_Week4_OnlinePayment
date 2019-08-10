<template>
  <div class="paypage_panel onlineAtm">
    <h1>網路ATM</h1>
    <form action="" class="form" @submit.prevent="submit">
      <h3>請選擇以下網路銀行付款</h3>
      <ul class="bank-list">
        <li class="bank"
            v-for="(item, index) in bankList"
            :key="index"
            :class="item === selectedBank ? 'active' : ''"
            @click="selectedBank = item"
        >
          {{ item }}
        </li>
      </ul>
      <div class="alert onlinAtm">
        <ol>
          <li>
            選擇以上任一銀行之金融卡並使用同銀行WebATM進行轉帳享0元手續費； 使用他行WebATM，則需支付跨行手續費15元。
          </li>
          <li>
            若無以上任一家銀行之金融卡，可任意選擇或點選其他金融機構進行付款， 需支付跨行手續費15元。 例：玉山金融卡在玉山WebATM轉帳享0元手續費；玉山金融卡在非玉山 WebATM轉帳收取15元手續費。
          </li>
        </ol>
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
      bankList: [
        '兆豐國際商銀', '台灣土地銀行', '永豐銀行', '台灣銀行',
        '國泰世華銀行', '中國信託', '玉山銀行', '第一銀行',
        '台北富邦', '台新銀行', '其他金融機構'
      ],
      selectedBank: '兆豐國際商銀'
    };
  },
  methods: {
    submit(e) {
      this.$router.push({ path: 'end' });
    }
  }
};
</script>
