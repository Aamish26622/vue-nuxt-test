<template>
  <div class="todo-item">
    <InputCheckbox @toggle="updateItem" :label="item.title" :value="item.completed"></InputCheckbox>
    <Button @click="deleteItem" class="btn-secondary btn-icon-small" icon="/_nuxt/assets/icons/trash-can-regular.svg"></Button>
  </div>
</template>

<script>
import TodoService from "~/services/todo.service.js";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateItem(completed) {
      let updatedItem = this.item
      updatedItem.completed = completed
      TodoService.updateRecord(updatedItem)
    },
    deleteItem(){
      this.$emit('delete')
    }
  }
}
</script>