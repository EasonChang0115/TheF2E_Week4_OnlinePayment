<template>
  <div class="form-input" :class="className">
    <label><span v-if="required">*</span>{{ label }}</label>
    <div class="input-box" :style="{ borderBottomColor: invalid ? '#FF521A' : '' }">
      <input :ref="refName" :type="type" :placeholder="placeholder" @change="inputChange" :value="value" @focus="myfocus">
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
    refName: {
      type: String,
      default: ''
    },
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
    focus: {
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
    validation() {
      if (this.required) {
        this.invalid = this.onValidation();
        return this.invalid;
      }
      return false;
    },
    inputChange(e) {
      if (this.invalid === true) {
        this.invalid = false;
      }
      this.$emit('input', e.target.value);
    },
    myfocus() {
      this.focus();
    }
  }
};
</script>
