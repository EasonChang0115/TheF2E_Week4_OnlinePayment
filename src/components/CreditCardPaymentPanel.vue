<template>
  <div class="paypage_panel">
    <h1>信用卡付款</h1>
    <ul class="card-image-list">
      <li class="card-image visa"
      :style="{ backgroundImage: `url('${publicPath}images/VISA${cardType === 'visa' ? '_active' : ''}.svg')`}">
      </li>
      <li class="card-image master"
      :style="{ backgroundImage: `url('${publicPath}images/master${cardType === 'master' ? '_active' : ''}.svg')`}">
      </li>
      <li class="card-image jcb" :style="{ backgroundImage: `url('${publicPath}images/JCB${cardType === 'jcb' ? '_active' : ''}.svg')` }"></li>
      <li class="card-image union" :style="{ backgroundImage: `url('${publicPath}images/UnionPay${cardType === 'union' ? '_active' : ''}.svg')` }"></li>
    </ul>
    <form action="" class="form" @submit.prevent="submit">
      <Input label="持卡人"
        ref="cardName"
        refName="cardNameInput"
        :required="true"
        placeholder="請輸入持卡人姓名"
        errorMsg="持卡人姓名需與信用卡面姓名一致"
        :onValidation="invalidCardName"
        v-model="formData.cardName"
        :focus="cardNameFocus"
      />
      <CreditCardInput label="信用卡號"
        ref="creditCardNumber"
        refName="creditCardNumberInput"
        :required="true"
        className="mt-30"
        :onValidation="invalidCreditCardNumber"
        errorMsg="請提供正確的信用卡卡號"
        @onCardNumberChange="cardNumberChange"
      />
      <div class="date-and-number mt-30">
        <ValidDataInput label="有效月年" :required="true"
          refName="creditCardDateInput"
          ref="creditCardDate"
          errorMsg="請輸入正確的有效月年"
          :onValidation="invalidDate"
          @onCardDateChange="cardDateChange"
        />
        <ValidNumberInput label="信用卡背面末三碼" :required="true"
          ref="creditCardValidNumber"
          refName="creditCardValidNumberInput"
          errorMsg="請輸入正確的末三碼"
          :onValidation="invalidNumber"
          v-model="formData.validNumber"
        />
      </div>
      <Input label="手機號碼"
        className="mt-30"
        ref="phoneNumber"
        refName="phoneNumberInput"
        :required="true"
        errorMsg="請輸入正確的電話號碼"
        :onValidation="invalidPhoneNumber"
        v-model="formData.phoneNumber"
        :focus="cardPhoneNumberFocus"
      />
      <div class="alert">
        如非台灣手機號碼請加國碼，如香港為852，則輸入852123456789。<br>若刷卡驗證採簡訊驗證，簡訊將發送至您於發卡銀行留存的手機號碼。
      </div>
      <div class="button-group">
        <button class="second">確認付款</button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from './form/Input.vue';
import CreditCardInput from './form/CreditCardInput.vue';
import ValidDataInput from './form/ValidDataInput.vue';
import ValidNumberInput from './form/ValidNumberInput.vue';
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      cardType: '',
      formData: {
        cardName: '',
        creditCardNumber: '',
        phoneNumber: '',
        date: {
          month: '',
          year: ''
        },
        validNumber: ''
      }
    };
  },
  watch: {
    'formData.creditCardNumber': {
      handler() {
        let creditCardNumber = this.formData.creditCardNumber;
        if (Number(creditCardNumber[0]) === 4) this.cardType = 'visa';
        else if (Number(creditCardNumber[0]) === 5) {
          let number = Number(creditCardNumber[0] + creditCardNumber[1]);
          if (number >= 51 && number <= 55) this.cardType = 'master';
          else this.cardType = '';
        } else if (creditCardNumber.slice(0, 4) === '1800' || creditCardNumber.slice(0, 4) === '2131') {
          this.cardType = 'jcb';
        } else if (creditCardNumber.slice(0, 1) === '3') {
          let number = Number(creditCardNumber.slice(0, 3));
          if (number >= 300 && number <= 399) this.cardType = 'jcb';
          else this.cardType = '';
        } else if (creditCardNumber.slice(0, 1) === '9' ||
                   creditCardNumber.slice(0, 2) === '62' ||
                   creditCardNumber.slice(0, 2) === '60') {
          this.cardType = 'union';
        } else {
          this.cardType = '';
        }
      }
    }
  },
  components: {
    Input,
    CreditCardInput,
    ValidDataInput,
    ValidNumberInput
  },
  methods: {
    submit(e) {
      if (this.$refs.cardName.validation()) {
        this.$refs.cardName.$refs.cardNameInput.focus();
        return;
      }
      if (this.$refs.creditCardNumber.validation()) {
        this.$refs.creditCardNumber.$refs.creditCardNumberInput.focus();
        return;
      }
      if (this.$refs.creditCardDate.validation()) {
        this.$refs.creditCardDate.$refs.creditCardDateInput.focus();
        return;
      }
      if (this.$refs.creditCardValidNumber.validation()) {
        this.$refs.creditCardValidNumber.$refs.creditCardValidNumberInput.focus();
        return;
      }
      if (this.$refs.phoneNumber.validation()) {
        this.$refs.phoneNumber.$refs.phoneNumberInput.focus();
        return;
      }
      this.$router.push({ path: 'end' });
    },
    invalidCardName() {
      if (this.formData.cardName.length === 0) return true;
      return false;
    },
    invalidPhoneNumber() {
      let reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
      if (!reg.test(this.formData.phoneNumber)) return true;
      return false;
    },
    invalidCreditCardNumber() {
      let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      let mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
      let JCBRegEx = /^35(2[8-9]|[3-8])\\d*$/;
      let unionRegEx = /^(622(1(2[6-9]|[3-9])|[3-8]|9([[0-1]|2[0-5]))|62[4-6]|628([2-8]))\\d*?$/;
      let isInvalid = true;
      switch (this.cardType) {
        case 'visa':
          isInvalid = !visaRegEx.test(this.formData.creditCardNumber);
          break;
        case 'master':
          isInvalid = !mastercardRegEx.test(this.formData.creditCardNumber);
          break;
        case 'jcb':
          isInvalid = !JCBRegEx.test(this.formData.creditCardNumber);
          break;
        case 'union':
          isInvalid = !unionRegEx.test(this.formData.creditCardNumber);
          break;
        default:
          break;
      }
      return isInvalid;
    },
    invalidDate() {
      return isNaN(this.formData.date.month) || isNaN(this.formData.date.year);
    },
    invalidNumber() {
      return isNaN(this.formData.validNumber) || this.formData.validNumber.length === 0;
    },
    cardNameFocus() {
      this.formData.cardName = '';
    },
    cardPhoneNumberFocus() {
      this.formData.phoneNumber = '';
    },
    cardNumberChange(text) {
      this.formData.creditCardNumber = text;
    },
    cardDateChange(dateObject) {
      this.formData.date.month = dateObject.month;
      this.formData.date.year = dateObject.year;
    }
  }
};
</script>
