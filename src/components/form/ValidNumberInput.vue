<template>
  <div class="form-input width-init" :class="className">
    <label><span v-if="required">*</span>{{ label }}</label>
    <div class="input-box number" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
      <input class="number" type="text" :value="value" @change="changeNumber" @focus="onfocus">
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
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
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
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      invalid: false
    };
  },
  methods: {
    onfocus() {
      this.invalid = false;
    },
    validation() {
      if (this.required) {
        this.invalid = this.onValidation();
        return this.invalid;
      }
      return false;
    },
    changeNumber(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>
