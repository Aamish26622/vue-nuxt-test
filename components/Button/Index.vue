<template>
  <button v-bind="$attrs" class="btn">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    }
  }
}
</script>