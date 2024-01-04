<template>
    <template v-for="(item, index) in items" :key="index">
      <TodoItem :item="item"></TodoItem>
    </template>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    }
  },
}
</script>