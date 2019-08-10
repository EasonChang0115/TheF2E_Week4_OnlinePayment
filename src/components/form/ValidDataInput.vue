<template>
  <div class="form-input width-init" :class="className">
    <label><span v-if="required">*</span>{{ label }}</label>
    <div class="input-boxes">
      <div class="input-box date" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
        <input type="text" id="credit-card-month" placeholder="MM" v-model="dateInput.month" maxlength="2"
        @keyup="e => { setBlur(e, 'credit-card-year') }"
        @focus="onfocus">
      </div>
      <div class="line latic">/</div>
      <div class="input-box date" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
        <input type="text" id="credit-card-year" placeholder="YY" v-model="dateInput.year" maxlength="2"
        @keyup.delete="e => { setBlurUp(e, 'credit-card-month') }"
        @focus="onfocus">
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
    },
    focus: {
      type: Function,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    dateInput: {
      deep: true,
      handler() {
        this.$emit('onCardDateChange', this.dateInput);
      }
    }
  },
  data() {
    return {
      invalid: false,
      dateInput: {
        month: '',
        year: ''
      }
    };
  },
  methods: {
    validation() {
      if (this.required) {
        this.invalid = this.onValidation();
        return this.invalid;
      }
      return false;
    },
    onfocus() {
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
