<template>
  <label class="checkbox-input-label">
    <input @change="valueChanged($event)" class="checkbox-input" :checked="value" type="checkbox">
    <span class="checkmark"></span>
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      default: ''
    }
  },
  methods: {
    valueChanged(e) {
      this.$emit("toggle", e.target.checked ? 1 : 0);
    },
  }
}
</script>