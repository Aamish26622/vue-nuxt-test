<template>
  <input
      v-bind="$attrs"
      type="text"
      :value="modelValue"
      class="text-input"
      placeholder="Placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script>
export default {
  props:{
    modelValue: {
      type: String,
      default: ""
    },
  }
}
</script>