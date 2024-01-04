<template>
    <template v-for="(item, index) in items" :key="index">
      <TodoItem @delete="deleteItem(item.id, index)" :item="item"></TodoItem>
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
  methods: {
    deleteItem(itemId, index){
      this.$emit('deleteItem', {
        item_id:  itemId,
        index: index
      })
    }
  }
}
</script>