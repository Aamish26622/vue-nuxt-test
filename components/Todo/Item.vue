<template>
  <div class="todo-item">
    <InputCheckbox @toggle="updateItem" :label="item.title" :value="item.completed"></InputCheckbox>
    <Button @click="deleteItem" :disabled="submitting" class="btn-secondary btn-icon-small" icon="/_nuxt/assets/icons/trash-can-regular.svg"></Button>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    submitting: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateItem(completed) {
      this.item.completed = completed
      this.$emit('update', this.item)
    },
    deleteItem(){
      this.$emit('delete')
    }
  }
}
</script>