<template>
  <label class="checkbox-input-label">
    <input class="checkbox-input" :checked="value" type="checkbox">
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
}
</script>