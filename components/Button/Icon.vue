<template>
  <button v-bind="$attrs" class="btn">
    <img v-if="icon" :src="icon" alt="">
  </button>
</template>
<script >
export default {
  props: {
    icon: {
      type: String,
      default: ""
    }
  }
}
</script>