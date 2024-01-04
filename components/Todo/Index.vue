<template>
  <Card>
    <template v-slot:title>
      <p class="app-heading">Todo App</p>
    </template>
    <template v-slot:content>
      <TodoCreateForm @created="insertTodo"></TodoCreateForm>
      <div v-if="loading" class="loader"></div>
      <TodoItems v-else @updateItem="updateTodo" @deleteItem="deleteTodo" :submitting="submitting" :items="items"></TodoItems>
    </template>
  </Card>
</template>

<script>
import TodoService from "~/services/todo.service.js";

export default {
  data() {
    return {
      items: [],
      loading: false,
      submitting: false
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      this.loading = true;
      TodoService.getRecords()
          .then((response) => {
            this.items = response.data
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            this.loading = false;
          })
    },
    insertTodo(newTodo) {
      this.items.unshift(newTodo)
    },
    updateTodo(item) {
      this.submitting = true
      TodoService.updateRecord(item)
          .then(() => {
            console.log('success')
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            this.submitting = false;
          })
    },
    deleteTodo(data) {
      this.submitting = true
      TodoService.deleteRecord(data.item_id)
          .then(() => {
            this.items.splice(data.index, 1);
          })
          .catch((error) => {
            console.log(error)
          })
          .finally(() => {
            this.submitting = false;
          })
    }
  }
}
</script>