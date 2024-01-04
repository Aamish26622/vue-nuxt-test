<template>
    <template v-for="(item, index) in items" :key="index">
      <TodoItem @update="updateItem" @delete="deleteItem(item.id, index)" :submitting="submitting" :item="item"></TodoItem>
    </template>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    submitting: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateItem(item) {
      this.$emit('updateItem', item)
    },
    deleteItem(itemId, index){
      this.$emit('deleteItem', {
        item_id:  itemId,
        index: index
      })
    }
  }
}
</script>