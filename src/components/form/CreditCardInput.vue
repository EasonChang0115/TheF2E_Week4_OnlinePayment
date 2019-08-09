<template>
  <div class="form-input credit-card" :class="className">
    <label><span v-if="required">*</span>{{ label }}</label>
    <div class="input-boxes">
      <div class="input-box" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
        <input type="text" id="credit-card-input1" name="input1" maxlength="4" placeholder="* * * *"
        v-model.number="cardNumber.input1"
        @keyup="e => { setBlur(e, 'credit-card-input2') }"
        @focus="focus">
      </div>
      <div class="line">-</div>
      <div class="input-box" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
        <input type="text" id="credit-card-input2"  name="input2" maxlength="4" placeholder="* * * *"
        v-model.number="cardNumber.input2"
        @keyup="e => { setBlur(e, 'credit-card-input3') }"
        @keyup.delete="e => { setBlurUp(e, 'credit-card-input1') }"
        @focus="focus">
      </div>
      <div class="line">-</div>
      <div class="input-box" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
        <input type="text" id="credit-card-input3" name="input3" maxlength="4" placeholder="* * * *"
        v-model.number="cardNumber.input3"
        @keyup="e => { setBlur(e, 'credit-card-input4') }"
        @keyup.delete="e => { setBlurUp(e, 'credit-card-input2') }"
        @focus="focus">
      </div>
      <div class="line">-</div>
      <div class="input-box" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
        <input type="text" id="credit-card-input4"  name="input4" maxlength="4" placeholder="* * * *"
        v-model.number="cardNumber.input4"
        @keyup.delete="e => { setBlurUp(e, 'credit-card-input3') }"
        @focus="focus">
      </div>
    </div>
    <div class="error-msg"
      :style="{
        visibility: required && invalid ? 'visible' : 'hidden',
        opacity: required && invalid ? '1' : '0'
      }"
    >
      {{ errorMsg }}<span>❗</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      default: ''
    },
    onValidation: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      invalid: false,
      cardNumber: {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      }
    };
  },
  watch: {
    cardNumber: {
      deep: true,
      handler() {
        let cardNumber = this.cardNumber.input1 + '' +
                         this.cardNumber.input2 + '' +
                         this.cardNumber.input3 + '' +
                         this.cardNumber.input4;
        this.$emit('onCardNumberChange', cardNumber);
      }
    }
  },
  methods: {
    validation() {
      if (this.required) {
        this.invalid = this.onValidation();
        return this.invalid;
      }
      return false;
    },
    focus() {
      this.invalid = false;
    },
    setBlur(e, nextEle) {
      let target = document.getElementById(nextEle);
      if (e.target.value.length.toString() === e.target.getAttribute('maxlength')) {
        target.focus();
      }
    },
    setBlurUp(e, nextEle) {
      let target = document.getElementById(nextEle);
      if (e.target.value.length === 0) {
        target.focus();
      }
    }
  }
};
</script>
