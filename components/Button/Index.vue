<template>
  <button v-bind="$attrs" class="btn">{{ label }}
    <img v-if="icon" :src="icon" alt="">
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  }
}
</script>